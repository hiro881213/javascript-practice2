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

    }

}