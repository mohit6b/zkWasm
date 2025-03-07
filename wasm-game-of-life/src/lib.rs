mod utils;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    // name: &str;
    alert("Hello, Demo of wasm-pack for towerdefence game setup!");
}
