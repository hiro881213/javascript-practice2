function playGame() {

    // m以上n以下のランダムな整数を返す
    function rand(m, n) {
        return m + Math.floor((n - m + 1)*Math.random());
    }

    // サイコロの目を表す文字列をランダムに返す
    function randFace() {
        return ["crown", "anchor", "heart", "spade", "club", "diamond"][rand(0, 5)];
    }

    // 開始時の資金
    let funds = 50;

    // ラウンド(何回目の賭けか)
    let round = 0;

    // 資金が0以上または100以下の間繰り返し実行する
    while ( funds > 0 && funds < 100) {

        // ラウンドを加算する
        round++;

        console.log(`第${round}ラウンド:`);
        console.log(`手持ち資金: ${funds}`);

        // 賭ける
        let bets = {
            crown  : 0,
            anchor : 0,
            heart  : 0,
            spade  : 0,
            club   : 0,
            diamond: 0
        };

        // トータルベットを取得する
        let totalBet = rand(1, funds);

        // 全部賭ける
        if (totalBet === 7) {

            totalBet = funds;
            bets.heart = totalBet;
        
        // 掛け金を振り分ける
        } else {

            // 残金を取得する
            let remaining = totalBet;

            do {

                // 掛け金を取得する
                let bet = rand(1, remaining);

                // 賭ける対象を選択する
                let face = randFace();

                // 掛け金を追加する
                bets[face] = bets[face] + bet;

                // 残金を計算する
                remaining = remaining - bet;

            } while ( remaining > 0)

        }

        // 所持金を計算する
        funds = funds - totalBet;

        console.log(
            `掛け金: ${totalBet} (` + 
            Object.keys(bets).map(face => `${face}: ${bets[face]}`).join(', ')
            + `)`);

        // サイコロを振る
        const hand = [];

        for ( let roll = 0; roll < 3; roll++ ) {

            // サイコロを振る
            hand.push(randFace());

        }

        console.log(`出目: ${hand.join(',')}`);

        // 払戻金をもらう
        let winnings = 0;

        for ( let die = 0; die < hand.length; die++ ) {

            // 結果を取得する
            let face = hand[die];

            // 掛け金が存在する場合賞金を取得する
            if (bets[face] > 0 ) winnings = winnings + bets[face];

        }

        // 資金に追加する
        funds += winnings;
        console.log(`払戻金: ${winnings}`);

    }

    console.log(`残金: ${funds}`);

    if (100 <= funds) console.log("意気揚々と船に戻る。¥n");
    else console.log("トボトボと船に帰る。¥n")


}
