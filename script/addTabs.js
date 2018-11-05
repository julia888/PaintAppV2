function addTab() {
    let blockTabs = document.getElementById('blockTabs');
    let allContent = document.getElementById('allContent');

    countFunc();

    //фабрика табов
    function funcAddTab() {
        //блок для нового таба
        this.div = document.createElement('div');
        //событие для блока
        this.att = document.createAttribute("onclick");
        this.att.value = "openCanvas(event, 'canvas-"+count+"')";
        //текст таба
        this.text = document.createTextNode('Tab-'+count);
        //кнопка в табе
        this.btn = document.createElement('BUTTON');
        //текст для таба
        this.div.appendChild(this.text);
        //событие для таба
        this.div.setAttributeNode(this.att);
        //крестик
        this.textBtn = document.createTextNode('\u00D7');
        //крестик в кнопке
        this.btn.appendChild(this.textBtn);
        //класс для кнопки
        this.btn.className = 'btnTab';
        //событие для кнопки
        this.att2 = document.createAttribute("onclick");
        this.att2.value = "deleteField("+count+")";
        this.btn.setAttributeNode(this.att2);
        //кнопка для таба
        this.div.appendChild(this.btn);
        //класс таба
        this.div.className = 'divTab';
        //ид для таба
        this.div.id = 'div' + count;
        //блок для всех табов без кнопки аддТаб
        blockTabs.appendChild(this.div);
    }

    funcAddTab();

    //фабрика канваса
    function funcAddCanvas() {
        //блок для нового канваса
        this.divCanvas = document.createElement('div');
        //класс для блока
        this.divCanvas.className = 'canvas-wrapper';
        //ид для блока
        this.divCanvas.id = 'canvas-'+count;
        //создание самого канваса
        this.canvas = document.createElement('canvas');
        //класс для самого канваса
        this.canvas.className = 'canvas-class';
        //ид для самого канваса
        this.canvas.id = 'canvasId-' + count;
        //ширина и высота канваса
        this.canvas.width = '1400';
        this.canvas.height = '700';
        //сам канвас в блок
        this.divCanvas.appendChild(this.canvas);
        //все блоки в канвас
        allContent.appendChild(this.divCanvas);
        this.canvas.style.backgroundColor = 'antiquewhite';
    }

    funcAddCanvas();


/*
    <!-- Tabs-->
    <div class = 'blockTabs'>
        <div class = 'divTab' onclick="openCity(event, 'First_canvas')">
            Tab name
            <button class = 'btnTab'> x</button>
        </div>
        <div class = 'divTab' onclick="openCity(event, 'Second_canvas')">
            Tab name
            <button class = 'btnTab'> x</button>
        </div>
    </div>

    <!-- Tab content -->
    <div class="All_content">
        <div class="canvas-wrapper" id='First_canvas'>
            <canvas id="canvas1" width="1400px" height="700px"></canvas>
        </div>
        <div class="canvas-wrapper" id='Second_canvas'>
            <canvas id="canvas1" width="1400px" height="700px"></canvas>
        </div>
     </div>
*/

    getCanvas();
    addEventListener(document.getElementById('canvasId-' + count));
}
let count = 0;
function countFunc() {
    count++;
}

function openCanvas(event, canvasName) {
    let tabcontent = document.getElementsByClassName("canvas-wrapper");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    let tablinks = document.getElementsByClassName("divTab");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(canvasName).style.display = "block";
    event.currentTarget.className += " active";
}

function getCanvas() {
     document.getElementsByClassName('canvas-class');
}