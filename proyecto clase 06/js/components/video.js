export default class Video {
    constructor(parentID, url, width, height) {
        this.parentID = parentID;
        this.url = url;
        this.width = width;
        this.height = height;
        this.type = type;
        
    }

    render() {
        let myparent = document.getElementById(this.parentID);
        

        //console.log(type);
        const myVideo = `<video controls width=${this.width} height=${this.height}>        
        <source src=${this.url} type="video/${type}></video> `;

         myparent.innerHTML = myVideo; 
    }
}