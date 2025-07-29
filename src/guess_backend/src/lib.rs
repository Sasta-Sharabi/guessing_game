use ic_cdk::api::management_canister::main::raw_rand;

#[ic_cdk::update]
pub async fn play(guess: String) -> (bool, u8) {
    let random_bytes = match raw_rand().await {
        Ok((bytes,)) => bytes,
        Err(_) => return (false, 0),
    };

    let secret_number = (random_bytes[0] % 20) + 1;

    let guess: u8 = match guess.trim().parse() {
        Ok(num) => num,
        Err(_) => 0,
    };

    if guess != 0 {
        (check_guess(guess, secret_number), secret_number)
    } else {
        (false, secret_number)
    }
}

fn check_guess(guess: u8, secret_number: u8) -> bool {
    guess == secret_number
}
