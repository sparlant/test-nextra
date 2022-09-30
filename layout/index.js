import { Sidebar } from './sidebar';

function updatePageMap(pageMap, root, result){
    for(let page of pageMap) {
        if (page.name !== "meta.json" && (page.name !== "index" || root)) {
            if (page.children && page.children.length > 0) {
                if (page.children.filter(c => c.name === "index").length > 0) {
                    let children = [];
                    updatePageMap(page.children, false, children);
                    result.push({
                        "type": "folder-with-index",
                        "name": page.name,
                        "link": page.route,
                        "children": children
                    })
                } else {
                    let children = [];
                    updatePageMap(page.children, false, children);
                    result.push({
                        "type": "folder",
                        "name": page.name,
                        "link": page.route,
                        "children": children
                    })
                }
            } else {
                result.push({
                    "type": "page",
                    "name": page.name,
                    "link": page.route
                })
            }
        }
    }
}

export default function Layout(pageProps) {
    return function Layout({ children }) {
        let result = [];
        updatePageMap(pageProps.pageMap, true, result)
       return (
        <>
            <Sidebar tree={result} />
            <div className="body-text">
                {children}
            </div>
        </>
        )
     } ;
}