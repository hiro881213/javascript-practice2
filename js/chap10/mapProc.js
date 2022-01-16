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

        console.log("------マップのクリア------");
        
        userRoles.clear();
        
        console.log(userRoles.size);
        console.log([...userRoles.values()]);

    }

    {
        console.log("------ウィークマップ------");

        const SecretHolder = (() => {
            
            const secrets = new WeakMap();

            return class {

                // シークレットのセット
                setSecret(secret) {
                    
                    secrets.set(this, secret);

                }

                // シークレットの取得
                getSecret() {
                    return secrets.get(this);
                }

            }

        })();

        const a = new SecretHolder();
        const b = new SecretHolder();

        a.setSecret('秘密A');
        b.setSecret('秘密B');

        console.log(a.getSecret());
        console.log(b.getSecret());

    }

    {
        console.log("------セット------");

        // Setを定義する
        const roles = new Set();

        roles.add("ユーザ");
        console.log(roles);

        roles.add("管理者");
        console.log(roles);

        console.log(roles.size);

        roles.add("ユーザ");
        console.log(roles);

        console.log(roles.delete("管理者"));
        console.log(roles);
        console.log(roles.delete("管理者"));

    }

    {

        console.log("------ウィークセット------");

        const naughty = new WeakSet();

        const children = [
            {name: "A"},
            {name: "B"},
        ];

        naughty.add(children[1]);

        for ( let child of children ) {

            if (naughty.has(child))
                console.log(`${child.name}がある`);
            else
                console.log(`${child.name}がいない`);

        }

    }

}