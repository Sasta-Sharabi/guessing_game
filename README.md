Guide to run the project Locally:

step 1 : run `dfx generate`
        You will see the error: 

        Error: Failed while trying to generate type declarations for 'guess_frontend'.
        Caused by: Candid file: /home/revglory11/Projects/guessing_game/.dfx/local/canisters/guess_frontend/assetstorage.did doesn't exist.

        `.dfx` folder will appear in your project directory

step 2: `.dfx` folder will appear in your project directory after doing step 1.

step 3: create `guess_frontend` folder within .dfx/local/canisters

step 4: create `assetstorage.did` file within .dfx/local/canister/guess_frontend

step 5: paste following within `assetstorage.did`

        service: {};

step 6: Again run `dfx generate` in terminal. A `declaration` folder will be created in `src` folder of your project directory

step 7: run `npm install --save-dev vite` in terminal. //I forgot to add vite as dev dependency

step 8: run `dfx start` in terminal

step 9: In new terminal window, run `dfx deploy` keeping the previous terminal running in background.

step 10: Press on first URL to see the output.  


