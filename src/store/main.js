import { defineStore } from "pinia";
import axios from "axios";

export const useMainStore = defineStore ('main', {
    state: ()=> {
        return {
            jokeResponse: undefined
        }
    },
    actions :{
        getJoke() {
            axios.request({
                url: "https://geek-jokes.sameerkumar.website/api?format=json",
                method: "GET",
            }).then((response)=>{
                console.log(response);
                this.jokeResponse = response;
            }).catch((error)=>{
                console.log(error);
            })
        }
    },
    
    getters :{
        jokeText : state =>{
            if (state.jokeResponse != undefined){
                return state.jokeResponse.data.joke;
            }
            return undefined;
        },
        snakeJoke : state =>{
            if (state.jokeResponse != undefined){
                return state.jokeResponse.data.joke.str.replace(" ", "_");
            }
            return undefined;
        }

    }
})