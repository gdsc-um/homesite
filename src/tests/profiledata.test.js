import fs from 'fs';

test('Profile data should be valid', () => {
    const readFile = fs.readFileSync(`src/data/coreteam.json`, "utf-8");
    const json = JSON.parse(readFile);
    const coreteam = json.coreteam;

    coreteam.map((member) => {
        const name = member.name;
        const role = member.role;
        const picture = member.picture;
        const profile_url = member.profile_url;

        if (name === undefined || name === null || name === "") {
            throw new Error(`Name is undefined in ${name}`);
        }

        if (role === undefined || role === null || role === "") {
            throw new Error(`role is undefined in ${role}`);
        }

        if (picture === undefined || picture === null || picture === "") {
            throw new Error(`picture is undefined in ${picture}`);
        }

        if (profile_url === undefined || profile_url === null || profile_url === "") {
            throw new Error(`profile_url is undefined in ${profile_url}`);
        }
    });

    
});
