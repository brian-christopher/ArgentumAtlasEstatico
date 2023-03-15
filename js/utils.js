async function getServerListAsync(){
    const response = await fetch("/assets/data/servers.json");
    const content = await response.json();

    return content;
}


async function getServerByIdAsync(id){
    const serverList = await getServerListAsync();
    
    return serverList.find((server) => {
        return server.id === id;
    });
}