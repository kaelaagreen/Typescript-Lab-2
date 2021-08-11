import PromptSync from "prompt-sync";
import { Greeter } from "./greeter";

const prompt = require('prompt-sync')();

let myPrompt = PromptSync();

let name = myPrompt("What is your name?");

console.log("Oh! Nice to meet you " + name);