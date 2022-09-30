export function render(node) {
    if (node){
        if (node['type'] === 'folder') {
            return (
                <li key={node.name}>
                    <button>{node.name}</button>
                        <ul>
                            { 
                            node.children.map(item =>
                                render(item)
                            )
                            }
                        </ul>
                </li>
            )
        } else {
            if (node['type']  === 'folder-with-index') {
                return (
                    <li key={node.name}>
                        <a href={node.link}>{node.name}</a>
                        <ul>
                            { 
                            node.children.map(item =>
                                render(item)
                            )
                            }
                        </ul>
                    </li> 
                )
            } else {
                return (
                    <li key={node.name}>
                        <a href={node.link}>{node.name}</a>
                    </li> 
                )
            }
        }
    }
}

export function Sidebar({tree}) {
    return  (
        <div className="sidebar">
            <ul>
                {
                    tree.map(item =>
                        render(item)
                    )
                }
            </ul>
        </div>
    );
  
}