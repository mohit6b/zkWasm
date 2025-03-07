JSFOLDER:=./src/games/towerdefence/js
build:
	wasm-pack build --release --out-name gameplay --out-dir pkg
	cp pkg/gameplay.d.ts ./src/games/towerdefence/js/gameplay.d.ts
	cp pkg/gameplay_bg.wasm ./src/games/towerdefence/js/gameplay_bg.wasm
	cp pkg/gameplay_bg.wasm.d.ts ./src/games/towerdefence/js/gameplay_bg.wasm.d.ts
	cp pkg/gameplay_bg.js ./src/games/towerdefence/js/gameplay_bg.js

clean:
	rm -rf pkg
	rm -rf ./src/games/towerdefence/js/gameplay.d.ts
	rm -rf ./src/games/towerdefence/js/gameplay.wasm_bg.js
