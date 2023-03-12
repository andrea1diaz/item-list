import data from "./data.json";
import fs from "fs"

export function configureFakeBackend() {
    let realFetch = window.fetch;

    window.fetch = function (url: URL | RequestInfo, opts: RequestInit | undefined) {
        return new Promise((resolve, reject) => {

            // wrap in timeout to simulate server api call
            setTimeout(() => {
                console.log(url as string)
                // get data
                if ((url as string).endsWith('/items') && opts!.method === 'GET') {
                    resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(data)) } as Response);

                    return;
                }

                if ((url as string).match(/\/items\/\d+$/) && opts!.method === 'PUT') {
                    let params = opts!.body;

                    console.log(params)
                    /*file.key = "new value";
                        
                    fs.writeFile(fileName, JSON.stringify(file), function writeJSON(err) {
                    if (err) return console.log(err);
                    console.log(JSON.stringify(file));
                    console.log('writing to ' + fileName);
                    });*/
                    resolve({ ok: true } as Response);

                    return;
                }

                realFetch(url, opts).then(response => resolve(response));

            }, 500);
        });
    }
}