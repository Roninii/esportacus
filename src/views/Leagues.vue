<template>
    <main>
        <div class="container" :class="leagues.length ? '' : 'loading'">
            <template v-if="leagues.length">
                <Header title="Leagues" />
                <div v-for="league in leagues" :key="league.id" class="row">
                    <router-link class="league-name" to="">{{
                        league.name
                    }}</router-link>
                    {{ league.videogame.name }}
                </div>
                <Pagination
                    :current="currentPage"
                    :perPage="perPage"
                    :pages="totalPages"
                    @first="goFirst"
                    @last="goLast"
                    @go-to="goTo"
                />
            </template>
            <template v-else>
                Loading...
            </template>
        </div>
    </main>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import axios from "axios";

import Header from "../layouts/Header.vue";
import Pagination from "@/components/Pagination.vue";

@Component({
    components: {
        Header,
        Pagination,
    },
})
export default class Leagues extends Vue {
    leaguesURL = `https://api.pandascore.co/leagues`;

    leagues: Array<any>;

    currentPage: number;

    totalResults: number;

    perPage: number;

    totalPages: number;

    secret: string;

    constructor() {
        super();
        this.leagues = [];
        this.currentPage = 1;
        this.totalResults = 0;
        this.perPage = 20;
        this.totalPages = 0;
        this.secret = `Svkm0PUE2PwoSGBOjwKz3dxEb1TLfnWexGZRFCO1F2pmkdSHmNU`;
    }

    mounted() {
        this.fetchLeagues(this.currentView);
    }

    fetchLeagues(currentView: any) {
        axios
            .get(currentView, {
                headers: {
                    "Access-Control-Allow-Headers": "*",
                },
            })
            .then(res => {
                this.leagues = res.data;
                this.currentPage = parseInt(res.headers[`x-page`], 10);
                this.totalResults = parseInt(res.headers[`x-total`], 10);
                this.perPage = parseInt(res.headers[`x-per-page`], 10);

                this.totalPages = Math.round(this.totalResults / this.perPage);
            });
    }

    goFirst() {
        this.currentPage = 1;
        console.log(this.currentView);
        return this.currentView;
    }

    goLast() {
        this.currentPage = this.totalPages;
        return this.currentView;
    }

    goTo(page: number) {
        this.currentPage = page;
        return this.currentView;
    }

    get currentView() {
        return this.fetchLeagues(
            `${this.leaguesURL}?page=${this.currentPage}&per_page=${
                this.perPage
            }&token=${this.secret}`,
        );
    }
}
</script>

<style lang="scss" scoped>
main {
    min-height: 93vh;
}
header {
    width: 40rem;
    justify-self: center;

    @media screen and (max-width: 800px) {
        width: 75%;
    }
}
.container {
    display: grid;
    grid-gap: 1rem 0;
    grid-template-rows: 2fr;
    grid-auto-rows: minmax(1rem, 2.5rem);
    padding-bottom: 10px;

    @media screen and (min-width: 800px) {
        font-size: 1.2rem;
        max-width: 50rem;
        margin: 0 auto;
        jusity-content: center;
    }
}
.row {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.25rem;
    font-weight: 500;
    padding: 0.25rem;
    border-radius: 0.25rem;
    box-shadow: 0 0 10px #111;

    transition: all 0.3s ease-in;

    &:nth-child(even) {
        background-color: rgba($purple, 0.3);
    }

    &:hover {
        background: rgba($teal, 0.9);
        transform: scale(1.1);
        cursor: pointer;
    }
}
.league-name {
    width: 75%;
    text-decoration: none;
    color: inherit;
}
.loading {
    height: 90vh;
}
</style>
