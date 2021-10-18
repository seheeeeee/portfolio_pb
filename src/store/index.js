import Vue from 'vue'
import Vuex from 'vuex';
import { fetchAbout, fetchProject, fetchContact } from '../api/index.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        about: {},
        project: {},
        contact: {}
    },
    getters: {
        fetchedAbout(state){
            return state.about;
        },
        fetchedProject(state){
            return state.project;
        },
        fetchedContact(state){
            return state.contact;
        }
    },
    mutations: {
        SET_ABOUT(state, about){
            state.about = about;
        },
        SET_PROJECT(state, project){
            state.project = project;
        },
        SET_CONTACT(state, contact){
            state.contact = contact;
        }
    },
    actions: {
        FETCH_ABOUT(context){
            const response = fetchAbout();
            context.commit('SET_ABOUT', response);
        },
        FETCH_PROJECT(context){
            const response = fetchProject();
            context.commit('SET_PROJECT', response);
        },
        FETCH_CONTACT(context){
            const response = fetchContact();
            context.commit('SET_CONTACT', response);
        }
    }
})