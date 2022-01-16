function mapProc() {
    
    {
        console.log("------オブジェクト生成------");

        const u1 = { name: 'A' };
        const u2 = { name: 'B' };
        const u3 = { name: 'C' };
        const u4 = { name: 'D' };

        console.log("------マップ生成------");

        const userRoles = new Map([
            [u1, 'ユーザー'],
            [u2, 'ユーザー'],
            [u3, '管理者'],
        ])

        console.log(userRoles.get(u2));

        console.log("------マップの取得------");

        console.log(userRoles.has(u1));
        console.log(userRoles.get(u1));
        console.log(userRoles.has(u4));
        console.log(userRoles.get(u4));

        console.log("------マップのセット------");

        console.log(userRoles.get(u1));
        userRoles.set(u1, '管理者');
        console.log(userRoles.get(u1));

        console.log("------マップのサイズ取得------");
        console.log(userRoles.size);

        console.log("------マップのキー取得------");
        for (let u of userRoles.keys())
            console.log(u.name);

        console.log("------マップのバリュー取得------");
        for(let r of userRoles.values())
            console.log(r);

        console.log("------マップの内容取得------");
        for (let ur of userRoles.entries())
            console.log(`${ur[0].name}: ${ur[1]}`);

        console.log("------マップの内容取得(デストラクチャリング)------");
        for(let [u, r] of userRoles.entries())
            console.log(`${u.name}: ${r}`);

        console.log("------マップの内容取得(デストラクチャリング省略)------");
        for(let [u, r] of userRoles)
            console.log(`${u.name}: ${r}`);

        console.log("------マップと分割代入------");
        console.log(userRoles.values());
        console.log([...userRoles.values()]);

        console.log("------マップの要素削除------");
        userRoles.delete(u2);
        
        console.log(userRoles.size);
        console.log([...userRoles.values()]);

    }

}