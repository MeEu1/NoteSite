window.onload = function() {
    var clear = document.getElementById("btn_clear");
    var save = document.getElementById("btn_save");

    var counter = 0;

    function generateFileName() {
        let characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        let base_text = "file_";

        let name = "";

        if(counter <= 25) {
            name = base_text + characters[counter] + "_" + (Math.random() * counter);
            counter++;
        }
        else {
            let temp = counter;
            counter = 0;
            name = base_text + characters[counter] + "_" + (Math.random() * temp);
        }

        return name + ".txt";
    }

    function download(filename, text) {
        var link = document.createElement('a');
        link.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        link.setAttribute('download', filename);
    
        if (document.createEvent) {
            var event = document.createEvent('MouseEvents');
            event.initEvent('click', true, true);
            link.dispatchEvent(event);
        }
        else {
            link.click();
        }
    }

    clear.onclick = function() {
        document.getElementById("page").value = "";
        console.log("hsdbasd");
    }

    save.onclick = function() {
        let text = document.getElementById("page").value;
        
        download(generateFileName(), text);
    }

}