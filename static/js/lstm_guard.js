var vertexHeight = 15000;
var planeDefinition = 100;
var planeSize = 1245000;
var totalObjects = 50000;
var frame = 0;
var i, j, datax = [10000, 10100, 10200, 10300, 10400, 10500, 10600, 10700, 10800, 10900], datay = [], particles = [], point;
var datasource = localStorage.getItem('datasource_name');//获取数据源名称

var container = document.createElement('div');
document.body.appendChild(container);

var camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 1, 400000)
camera.position.x = 0;
camera.position.z = 600000;
camera.position.y = 20000;
camera.lookAt(new THREE.Vector3(0, 6000, 0));

var scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x23233f, 1, 300000);
var light = new THREE.DirectionalLight(0xffffff);
light.position.set(0, 10000, 550000);
light.density = 5000000;
light.shadow.camera.far = 4000000;
scene.add(light);
var light2 = new THREE.DirectionalLight(0xffffff);
light2.position.set(0, 10000, 300000);
light2.density = 5000000;
scene.add(light2);
var uniforms =
{
    time: { type: "f", value: 0.0 }// uniforms通过这个属性可以向你的着色器发信息。同样的信息会发送到每一个顶点和片元
};


//自己定制着色器ShaderMaterial
var material = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: document.getElementById('vertexShader').textContent,//vertexShader(顶点着色器)/这个着色器允许你修改每一个传入的顶点的位置
    fragmentShader: document.getElementById('fragmentShader').textContent,//fragementShader(片元着色器)/这个着色器定义的是每个传入的像素颜色
    wireframe: true,
    fog: false
});

var geometry = new THREE.Geometry();

for (i = 0; i < totalObjects / 2; i++) {
    var vertex = new THREE.Vector3();//返回沿当前三维线段方向的任意向量
    vertex.x = Math.random() * planeSize - (planeSize * .5);
    // vertex.y = (Math.random()*100000)+10000;
    vertex.z = Math.random() * planeSize - (planeSize * .5);
    geometry.vertices.push(vertex);
}
var material = new THREE.ParticleBasicMaterial({ size: 200 });
var particles = new THREE.ParticleSystem(geometry, material);
scene.add(particles);

////////////////////////////////////////////////////// need font begin ///////////////////////////////////////////////////////////////////
var loader = new THREE.FontLoader();
loader.load('../static/fonts/helvetiker_regular.typeface.json', function (font) {
    //画球体
    for (i = 0; i < 100; i++) {
        var dian_geometry = new THREE.SphereGeometry(1000, 10, 10);
        var dian_material = new THREE.MeshLambertMaterial({ color: 0xffff00 });
        var star = new THREE.Mesh(dian_geometry, dian_material);
        scene.add(star);
        star.position.x = Math.random() * planeSize - (planeSize * .5);
        star.position.y = Math.random() * 40000 + 40000;
        star.position.z = Math.random() * planeSize - (planeSize * .5);
    }
    for (i = 0; i < 100; i++) {
        var dian_geometry = new THREE.SphereGeometry(1000, 10, 10);
        var dian_material = new THREE.MeshLambertMaterial({ color: 0xff0033 });
        var star = new THREE.Mesh(dian_geometry, dian_material);
        scene.add(star);
        star.position.x = Math.random() * planeSize - (planeSize * .5);
        star.position.y = Math.random() * 40000 + 40000;
        star.position.z = Math.random() * planeSize - (planeSize * .5);
    }
    for (i = 0; i < 100; i++) {
        var dian_geometry = new THREE.SphereGeometry(1000, 10, 10);
        var dian_material = new THREE.MeshLambertMaterial({ color: 0xff0000 });
        var star = new THREE.Mesh(dian_geometry, dian_material);
        scene.add(star);
        star.position.x = Math.random() * planeSize - (planeSize * .5);
        star.position.y = Math.random() * 40000 + 40000;
        star.position.z = Math.random() * planeSize - (planeSize * .5);
    }
    for (i = 0; i < 100; i++) {
        var dian_geometry = new THREE.SphereGeometry(1000, 10, 10);
        var dian_material = new THREE.MeshLambertMaterial({ color: 0x0099ff });
        var star = new THREE.Mesh(dian_geometry, dian_material);
        scene.add(star);
        star.position.x = Math.random() * planeSize - (planeSize * .5);
        star.position.y = Math.random() * 40000 + 40000;;
        star.position.z = Math.random() * planeSize - (planeSize * .5);
    }
    for (i = 0; i < 100; i++) {
        var dian_geometry = new THREE.SphereGeometry(1000, 10, 10);
        var dian_material = new THREE.MeshLambertMaterial({ color: 0x00ff66 });
        var star = new THREE.Mesh(dian_geometry, dian_material);
        scene.add(star);
        star.position.x = Math.random() * planeSize - (planeSize * .5);
        star.position.y = Math.random() * 40000 + 40000;;
        star.position.z = Math.random() * planeSize - (planeSize * .5);
    }

    //画网格 
    function drawGridRight(x1, x2, y1, y2, ystart, xstart, z, interval, linenum) {
        var material_r2 = new THREE.LineBasicMaterial({ color: 0xffffff });
        var geometry_r2 = new THREE.Geometry();
        geometry_r2.vertices.push(new THREE.Vector3(x1, 0, z));
        geometry_r2.vertices.push(new THREE.Vector3(x2, 0, z));
        for (var i = 0; i <= linenum; i++) {
            var line_r2 = new THREE.Line(geometry_r2, material_r2);
            line_r2.position.y = (i * interval) + ystart;
            scene.add(line_r2);
        }
        var material_r2 = new THREE.LineBasicMaterial({ color: 0xffffff });
        var geometry_r2 = new THREE.Geometry();
        geometry_r2.vertices.push(new THREE.Vector3(0, y1, z));
        geometry_r2.vertices.push(new THREE.Vector3(0, y2, z));
        for (var i = 0; i <= linenum; i++) {
            var line_r2 = new THREE.Line(geometry_r2, material_r2);
            line_r2.position.x = (i * interval) + xstart;
            scene.add(line_r2);
        }
    }
    function drawGridLeft(x1, x2, y1, y2, ystart, xstart, z, interval, linenum) {
        var material_r2 = new THREE.LineBasicMaterial({ color: 0xffffff });
        var geometry_r2 = new THREE.Geometry();
        geometry_r2.vertices.push(new THREE.Vector3(x1, 0, z));
        geometry_r2.vertices.push(new THREE.Vector3(x2, 0, z));
        for (var i = 0; i <= linenum; i++) {
            var line_r2 = new THREE.Line(geometry_r2, material_r2);
            line_r2.position.y = (i * interval) + ystart;
            scene.add(line_r2);
        }
        var material_r2 = new THREE.LineBasicMaterial({ color: 0xffffff });
        var geometry_r2 = new THREE.Geometry();
        geometry_r2.vertices.push(new THREE.Vector3(0, y1, z));
        geometry_r2.vertices.push(new THREE.Vector3(0, y2, z));
        for (var i = 0; i <= linenum; i++) {
            var line_r2 = new THREE.Line(geometry_r2, material_r2);
            line_r2.position.x = -(i * interval) + xstart;
            scene.add(line_r2);
        }
    }
    drawGridRight(10000, 30000, 10000, 30000, 10000, 10000, 450000, 2000, 10);
    drawGridRight(10000, 30000, 10000, 30000, 10000, 10000, 350000, 2000, 10);
    drawGridLeft(-10000, -30000, 10000, 30000, 10000, -10000, 400000, 2000, 10);
    drawGridLeft(-10000, -30000, 10000, 30000, 10000, -10000, 500000, 2000, 10);

    drawGridRight(10000, 30000, 10000, 30000, 10000, 10000, 250000, 2000, 10);
    drawGridRight(10000, 30000, 10000, 30000, 10000, 10000, 150000, 2000, 10);
    drawGridLeft(-10000, -30000, 10000, 30000, 10000, -10000, 200000, 2000, 10);
    drawGridLeft(-10000, -30000, 10000, 30000, 10000, -10000, 300000, 2000, 10);
    drawGridRight(10000, 30000, 10000, 30000, 10000, 10000, 50000, 2000, 10);
    drawGridRight(10000, 30000, 10000, 30000, 10000, 10000, -50000, 2000, 10);
    drawGridLeft(-10000, -30000, 10000, 30000, 10000, -10000, 0, 2000, 10);
    drawGridLeft(-10000, -30000, 10000, 30000, 10000, -10000, 100000, 2000, 10);

    var tR1 = new Object();
    var tR2 = new Object();
    var tR3 = new Object();
    var tR4 = new Object();
    var tR5 = new Object();
    var tR6 = new Object();

    var tL1 = new Object();
    var tL2 = new Object();
    var tL3 = new Object();
    var tL4 = new Object();
    var tL5 = new Object();
    var tL6 = new Object();

    // //添加标题
    function titleRight(username, z, mesh) {
        var material = new THREE.MeshPhongMaterial({
            color: 0x66ccff,
            specular: 0x66ccff,
            shininess: 0
        });
        var mesh = new THREE.Mesh(new THREE.TextGeometry(username, {
            font: font,
            size: 1000,
            height: 1000
        }), material);
        mesh.name = username;
        mesh.position.set(16000, 32000, z);
        scene.add(mesh);
    }
    function titleLeft(username, z, mesh) {
        var material = new THREE.MeshPhongMaterial({
            color: 0x66ccff,
            specular: 0x66ccff,
            shininess: 0
        });
        var mesh = new THREE.Mesh(new THREE.TextGeometry(username, {
            font: font,
            size: 1000,
            height: 1000
        }), material);
        mesh.name = username;
        mesh.position.set(-24000, 32000, z);
        scene.add(mesh);
    }

    if (datasource == "default") {
        $(document).ready(function () {
            $.getJSON('/guard_test', function (ret) {
                for (var j = 0; j < 10; j++) {
                    var dian_geometry = new THREE.SphereGeometry(500, 10, 10);
                    if (ret[j] > 0.9) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff3300 });
                    else if (ret[j] > 0.8) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff0066 });
                    else if (ret[j] > 0.7) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff6699 });
                    else if (ret[j] > 0.6) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff99cc });
                    else if (ret[j] > 0.5) var dian_material = new THREE.MeshLambertMaterial({ color: 0xffccff });
                    else var dian_material = new THREE.MeshLambertMaterial({ color: 0x33ff00 });
                    var star = new THREE.Mesh(dian_geometry, dian_material);
                    scene.add(star);
                    star.position.x = -(10000 + 2000 * j);
                    star.position.y = ret[j] * 20000 + 10000;
                    star.position.z = 500000;
                }


                for (var j = 10; j < 20; j++) {
                    var dian_geometry = new THREE.SphereGeometry(500, 10, 10);
                    if (ret[j] > 0.9) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff3300 });
                    else if (ret[j] > 0.7) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff0066 });
                    else if (ret[j] > 0.5) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff6699 });
                    else if (ret[j] > 0.3) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff99cc });
                    else if (ret[j] > 0.1) var dian_material = new THREE.MeshLambertMaterial({ color: 0xffccff });
                    else var dian_material = new THREE.MeshLambertMaterial({ color: 0x33ff00 });
                    var star = new THREE.Mesh(dian_geometry, dian_material);
                    scene.add(star);
                    star.position.x = 10000 + 2000 * (j - 10);
                    star.position.y = ret[j] * 20000 + 10000;
                    star.position.z = 450000;
                }

                for (var j = 20; j < 30; j++) {
                    var dian_geometry = new THREE.SphereGeometry(500, 10, 10);
                    if (ret[j] > 0.9) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff3300 });
                    else if (ret[j] > 0.7) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff0066 });
                    else if (ret[j] > 0.5) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff6699 });
                    else if (ret[j] > 0.3) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff99cc });
                    else if (ret[j] > 0.1) var dian_material = new THREE.MeshLambertMaterial({ color: 0xffccff });
                    else var dian_material = new THREE.MeshLambertMaterial({ color: 0x33ff00 });
                    var star = new THREE.Mesh(dian_geometry, dian_material);
                    scene.add(star);
                    star.position.x = -(10000 + 2000 * (j - 20));
                    star.position.y = ret[j] * 20000 + 10000;
                    star.position.z = 400000;
                }

                for (var j = 30; j < 40; j++) {
                    var dian_geometry = new THREE.SphereGeometry(500, 10, 10);
                    if (ret[j] > 0.9) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff3300 });
                    else if (ret[j] > 0.7) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff0066 });
                    else if (ret[j] > 0.5) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff6699 });
                    else if (ret[j] > 0.3) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff99cc });
                    else if (ret[j] > 0.1) var dian_material = new THREE.MeshLambertMaterial({ color: 0xffccff });
                    else var dian_material = new THREE.MeshLambertMaterial({ color: 0x33ff00 });
                    var star = new THREE.Mesh(dian_geometry, dian_material);
                    scene.add(star);
                    star.position.x = 10000 + 2000 * (j - 30);
                    star.position.y = ret[j] * 20000 + 10000;
                    star.position.z = 350000;
                }

                for (var j = 40; j < 50; j++) {
                    var dian_geometry = new THREE.SphereGeometry(500, 10, 10);
                    if (ret[j] > 0.9) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff3300 });
                    else if (ret[j] > 0.7) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff0066 });
                    else if (ret[j] > 0.5) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff6699 });
                    else if (ret[j] > 0.3) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff99cc });
                    else if (ret[j] > 0.1) var dian_material = new THREE.MeshLambertMaterial({ color: 0xffccff });
                    else var dian_material = new THREE.MeshLambertMaterial({ color: 0x33ff00 });
                    var star = new THREE.Mesh(dian_geometry, dian_material);
                    scene.add(star);
                    star.position.x = -(10000 + 2000 * (j - 40));
                    star.position.y = ret[j] * 20000 + 10000;
                    star.position.z = 300000;
                }

                for (var j = 50; j < 60; j++) {

                    var dian_geometry = new THREE.SphereGeometry(500, 10, 10);
                    if (ret[j] > 0.9) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff3300 });
                    else if (ret[j] > 0.7) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff0066 });
                    else if (ret[j] > 0.5) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff6699 });
                    else if (ret[j] > 0.3) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff99cc });
                    else if (ret[j] > 0.1) var dian_material = new THREE.MeshLambertMaterial({ color: 0xffccff });
                    else var dian_material = new THREE.MeshLambertMaterial({ color: 0x33ff00 });
                    var star = new THREE.Mesh(dian_geometry, dian_material);
                    scene.add(star);
                    star.position.x = 10000 + 2000 * (j - 50);
                    star.position.y = ret[j] * 20000 + 10000;
                    star.position.z = 250000;
                }

                for (var j = 60; j < 70; j++) {

                    var dian_geometry = new THREE.SphereGeometry(500, 10, 10);
                    if (ret[j] > 0.9) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff3300 });
                    else if (ret[j] > 0.7) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff0066 });
                    else if (ret[j] > 0.5) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff6699 });
                    else if (ret[j] > 0.3) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff99cc });
                    else if (ret[j] > 0.1) var dian_material = new THREE.MeshLambertMaterial({ color: 0xffccff });
                    else var dian_material = new THREE.MeshLambertMaterial({ color: 0x33ff00 });
                    var star = new THREE.Mesh(dian_geometry, dian_material);
                    scene.add(star);
                    star.position.x = -(10000 + 2000 * (j - 60));
                    star.position.y = ret[j] * 20000 + 10000;
                    star.position.z = 200000;
                }

                for (var j = 70; j < 80; j++) {

                    var dian_geometry = new THREE.SphereGeometry(500, 10, 10);
                    if (ret[j] > 0.9) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff3300 });
                    else if (ret[j] > 0.7) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff0066 });
                    else if (ret[j] > 0.5) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff6699 });
                    else if (ret[j] > 0.3) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff99cc });
                    else if (ret[j] > 0.1) var dian_material = new THREE.MeshLambertMaterial({ color: 0xffccff });
                    else var dian_material = new THREE.MeshLambertMaterial({ color: 0x33ff00 });
                    var star = new THREE.Mesh(dian_geometry, dian_material);
                    scene.add(star);
                    star.position.x = 10000 + 2000 * (j - 70);
                    star.position.y = ret[j] * 20000 + 10000;
                    star.position.z = 150000;
                }

                for (var j = 80; j < 90; j++) {

                    var dian_geometry = new THREE.SphereGeometry(500, 10, 10);
                    if (ret[j] > 0.9) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff3300 });
                    else if (ret[j] > 0.7) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff0066 });
                    else if (ret[j] > 0.5) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff6699 });
                    else if (ret[j] > 0.3) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff99cc });
                    else if (ret[j] > 0.1) var dian_material = new THREE.MeshLambertMaterial({ color: 0xffccff });
                    else var dian_material = new THREE.MeshLambertMaterial({ color: 0x33ff00 });
                    var star = new THREE.Mesh(dian_geometry, dian_material);
                    scene.add(star);
                    star.position.x = -(10000 + 2000 * (j - 80));
                    star.position.y = ret[j] * 20000 + 10000;
                    star.position.z = 100000;
                }

                for (var j = 90; j < 100; j++) {

                    var dian_geometry = new THREE.SphereGeometry(500, 10, 10);
                    if (ret[j] > 0.9) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff3300 });
                    else if (ret[j] > 0.7) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff0066 });
                    else if (ret[j] > 0.5) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff6699 });
                    else if (ret[j] > 0.3) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff99cc });
                    else if (ret[j] > 0.1) var dian_material = new THREE.MeshLambertMaterial({ color: 0xffccff });
                    else var dian_material = new THREE.MeshLambertMaterial({ color: 0x33ff00 });
                    var star = new THREE.Mesh(dian_geometry, dian_material);
                    scene.add(star);
                    star.position.x = 10000 + 2000 * (j - 90);
                    star.position.y = ret[j] * 20000 + 10000;
                    star.position.z = 50000;
                }
                for (var j = 100; j < 110; j++) {

                    var dian_geometry = new THREE.SphereGeometry(500, 10, 10);
                    if (ret[j] > 0.9) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff3300 });
                    else if (ret[j] > 0.7) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff0066 });
                    else if (ret[j] > 0.5) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff6699 });
                    else if (ret[j] > 0.3) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff99cc });
                    else if (ret[j] > 0.1) var dian_material = new THREE.MeshLambertMaterial({ color: 0xffccff });
                    else var dian_material = new THREE.MeshLambertMaterial({ color: 0x33ff00 });
                    var star = new THREE.Mesh(dian_geometry, dian_material);
                    scene.add(star);
                    star.position.x = -(10000 + 2000 * (j - 100));
                    star.position.y = ret[j] * 20000 + 10000;
                    star.position.z = 0;
                }
                for (var j = 110; j < 120; j++) {
                    var dian_geometry = new THREE.SphereGeometry(500, 10, 10);
                    if (ret[j] > 0.9) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff3300 });
                    else if (ret[j] > 0.7) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff0066 });
                    else if (ret[j] > 0.5) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff6699 });
                    else if (ret[j] > 0.3) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff99cc });
                    else if (ret[j] > 0.1) var dian_material = new THREE.MeshLambertMaterial({ color: 0xffccff });
                    else var dian_material = new THREE.MeshLambertMaterial({ color: 0x33ff00 });
                    var star = new THREE.Mesh(dian_geometry, dian_material);
                    scene.add(star);
                    star.position.x = 10000 + 2000 * (j - 110);
                    star.position.y = ret[j] * 20000 + 10000;
                    star.position.z = -50000;
                }
            })
        });
        titleLeft('WDWCASZ0627345', 500000, tL1);   //0
        titleRight('S2A58BGQ', 450000, tR1);    //0
        titleLeft('5VM45975', 400000, tL2);     //0
        titleRight('Z1D3XB0A', 350000, tR2);    //0
        titleLeft('Z4YAZWRB', 300000, tL3);     //1
        titleRight('Z4YAZVXM', 250000, tR3);    //1
        titleLeft('Z4YAZW4W', 200000, tL4);     //0
        titleRight('Z4YAZVV4', 150000, tR4);    //0
        titleLeft('537TT03OT', 100000, tL5);    //1
        titleRight('6VY152TL', 50000, tR5);     //0
        titleLeft('Z4YAZTEF', 0, tL6);      //0
        titleRight('Z4YAZTKF', -50000, tR6);    //0  
    }
    else {
        $(document).ready(function () {
            $.getJSON('/guard_kdd', function (ret) {
                for (var j = 0; j < 10; j++) {
                    var dian_geometry = new THREE.SphereGeometry(500, 10, 10);
                    if (ret[j] > 0.9) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff3300 });
                    else if (ret[j] > 0.8) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff0066 });
                    else if (ret[j] > 0.7) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff6699 });
                    else if (ret[j] > 0.6) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff99cc });
                    else if (ret[j] > 0.5) var dian_material = new THREE.MeshLambertMaterial({ color: 0xffccff });
                    else var dian_material = new THREE.MeshLambertMaterial({ color: 0x33ff00 });
                    var star = new THREE.Mesh(dian_geometry, dian_material);
                    scene.add(star);
                    star.position.x = -(10000 + 2000 * j);
                    star.position.y = ret[j] * 20000 + 10000;
                    star.position.z = 500000;
                }
                for (var j = 10; j < 20; j++) {
                    var dian_geometry = new THREE.SphereGeometry(500, 10, 10);
                    if (ret[j] > 0.9) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff3300 });
                    else if (ret[j] > 0.7) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff0066 });
                    else if (ret[j] > 0.5) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff6699 });
                    else if (ret[j] > 0.3) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff99cc });
                    else if (ret[j] > 0.1) var dian_material = new THREE.MeshLambertMaterial({ color: 0xffccff });
                    else var dian_material = new THREE.MeshLambertMaterial({ color: 0x33ff00 });
                    var star = new THREE.Mesh(dian_geometry, dian_material);
                    scene.add(star);
                    star.position.x = 10000 + 2000 * (j - 10);
                    star.position.y = ret[j] * 20000 + 10000;
                    star.position.z = 450000;
                }
                for (var j = 20; j < 30; j++) {
                    var dian_geometry = new THREE.SphereGeometry(500, 10, 10);
                    if (ret[j] > 0.9) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff3300 });
                    else if (ret[j] > 0.7) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff0066 });
                    else if (ret[j] > 0.5) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff6699 });
                    else if (ret[j] > 0.3) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff99cc });
                    else if (ret[j] > 0.1) var dian_material = new THREE.MeshLambertMaterial({ color: 0xffccff });
                    else var dian_material = new THREE.MeshLambertMaterial({ color: 0x33ff00 });
                    var star = new THREE.Mesh(dian_geometry, dian_material);
                    scene.add(star);
                    star.position.x = -(10000 + 2000 * (j - 20));
                    star.position.y = ret[j] * 20000 + 10000;
                    star.position.z = 400000;
                }
                for (var j = 30; j < 40; j++) {
                    var dian_geometry = new THREE.SphereGeometry(500, 10, 10);
                    if (ret[j] > 0.9) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff3300 });
                    else if (ret[j] > 0.7) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff0066 });
                    else if (ret[j] > 0.5) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff6699 });
                    else if (ret[j] > 0.3) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff99cc });
                    else if (ret[j] > 0.1) var dian_material = new THREE.MeshLambertMaterial({ color: 0xffccff });
                    else var dian_material = new THREE.MeshLambertMaterial({ color: 0x33ff00 });
                    var star = new THREE.Mesh(dian_geometry, dian_material);
                    scene.add(star);
                    star.position.x = 10000 + 2000 * (j - 30);
                    star.position.y = ret[j] * 20000 + 10000;
                    star.position.z = 350000;
                }

                for (var j = 40; j < 50; j++) {
                    var dian_geometry = new THREE.SphereGeometry(500, 10, 10);
                    if (ret[j] > 0.9) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff3300 });
                    else if (ret[j] > 0.7) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff0066 });
                    else if (ret[j] > 0.5) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff6699 });
                    else if (ret[j] > 0.3) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff99cc });
                    else if (ret[j] > 0.1) var dian_material = new THREE.MeshLambertMaterial({ color: 0xffccff });
                    else var dian_material = new THREE.MeshLambertMaterial({ color: 0x33ff00 });
                    var star = new THREE.Mesh(dian_geometry, dian_material);
                    scene.add(star);
                    star.position.x = -(10000 + 2000 * (j - 40));
                    star.position.y = ret[j] * 20000 + 10000;
                    star.position.z = 300000;
                }

                for (var j = 50; j < 60; j++) {

                    var dian_geometry = new THREE.SphereGeometry(500, 10, 10);
                    if (ret[j] > 0.9) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff3300 });
                    else if (ret[j] > 0.7) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff0066 });
                    else if (ret[j] > 0.5) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff6699 });
                    else if (ret[j] > 0.3) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff99cc });
                    else if (ret[j] > 0.1) var dian_material = new THREE.MeshLambertMaterial({ color: 0xffccff });
                    else var dian_material = new THREE.MeshLambertMaterial({ color: 0x33ff00 });
                    var star = new THREE.Mesh(dian_geometry, dian_material);
                    scene.add(star);
                    star.position.x = 10000 + 2000 * (j - 50);
                    star.position.y = ret[j] * 20000 + 10000;
                    star.position.z = 250000;
                }

                for (var j = 60; j < 70; j++) {

                    var dian_geometry = new THREE.SphereGeometry(500, 10, 10);
                    if (ret[j] > 0.9) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff3300 });
                    else if (ret[j] > 0.7) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff0066 });
                    else if (ret[j] > 0.5) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff6699 });
                    else if (ret[j] > 0.3) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff99cc });
                    else if (ret[j] > 0.1) var dian_material = new THREE.MeshLambertMaterial({ color: 0xffccff });
                    else var dian_material = new THREE.MeshLambertMaterial({ color: 0x33ff00 });
                    var star = new THREE.Mesh(dian_geometry, dian_material);
                    scene.add(star);
                    star.position.x = -(10000 + 2000 * (j - 60));
                    star.position.y = ret[j] * 20000 + 10000;
                    star.position.z = 200000;
                }

                for (var j = 70; j < 80; j++) {

                    var dian_geometry = new THREE.SphereGeometry(500, 10, 10);
                    if (ret[j] > 0.9) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff3300 });
                    else if (ret[j] > 0.7) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff0066 });
                    else if (ret[j] > 0.5) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff6699 });
                    else if (ret[j] > 0.3) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff99cc });
                    else if (ret[j] > 0.1) var dian_material = new THREE.MeshLambertMaterial({ color: 0xffccff });
                    else var dian_material = new THREE.MeshLambertMaterial({ color: 0x33ff00 });
                    var star = new THREE.Mesh(dian_geometry, dian_material);
                    scene.add(star);
                    star.position.x = 10000 + 2000 * (j - 70);
                    star.position.y = ret[j] * 20000 + 10000;
                    star.position.z = 150000;
                }

                for (var j = 80; j < 90; j++) {

                    var dian_geometry = new THREE.SphereGeometry(500, 10, 10);
                    if (ret[j] > 0.9) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff3300 });
                    else if (ret[j] > 0.7) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff0066 });
                    else if (ret[j] > 0.5) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff6699 });
                    else if (ret[j] > 0.3) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff99cc });
                    else if (ret[j] > 0.1) var dian_material = new THREE.MeshLambertMaterial({ color: 0xffccff });
                    else var dian_material = new THREE.MeshLambertMaterial({ color: 0x33ff00 });
                    var star = new THREE.Mesh(dian_geometry, dian_material);
                    scene.add(star);
                    star.position.x = -(10000 + 2000 * (j - 80));
                    star.position.y = ret[j] * 20000 + 10000;
                    star.position.z = 100000;
                }

                for (var j = 90; j < 100; j++) {

                    var dian_geometry = new THREE.SphereGeometry(500, 10, 10);
                    if (ret[j] > 0.9) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff3300 });
                    else if (ret[j] > 0.7) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff0066 });
                    else if (ret[j] > 0.5) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff6699 });
                    else if (ret[j] > 0.3) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff99cc });
                    else if (ret[j] > 0.1) var dian_material = new THREE.MeshLambertMaterial({ color: 0xffccff });
                    else var dian_material = new THREE.MeshLambertMaterial({ color: 0x33ff00 });
                    var star = new THREE.Mesh(dian_geometry, dian_material);
                    scene.add(star);
                    star.position.x = 10000 + 2000 * (j - 90);
                    star.position.y = ret[j] * 20000 + 10000;
                    star.position.z = 50000;
                }
                for (var j = 100; j < 110; j++) {

                    var dian_geometry = new THREE.SphereGeometry(500, 10, 10);
                    if (ret[j] > 0.9) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff3300 });
                    else if (ret[j] > 0.7) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff0066 });
                    else if (ret[j] > 0.5) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff6699 });
                    else if (ret[j] > 0.3) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff99cc });
                    else if (ret[j] > 0.1) var dian_material = new THREE.MeshLambertMaterial({ color: 0xffccff });
                    else var dian_material = new THREE.MeshLambertMaterial({ color: 0x33ff00 });
                    var star = new THREE.Mesh(dian_geometry, dian_material);
                    scene.add(star);
                    star.position.x = -(10000 + 2000 * (j - 100));
                    star.position.y = ret[j] * 20000 + 10000;
                    star.position.z = 0;
                }
                for (var j = 110; j < 120; j++) {
                    var dian_geometry = new THREE.SphereGeometry(500, 10, 10);
                    if (ret[j] > 0.9) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff3300 });
                    else if (ret[j] > 0.7) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff0066 });
                    else if (ret[j] > 0.5) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff6699 });
                    else if (ret[j] > 0.3) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff99cc });
                    else if (ret[j] > 0.1) var dian_material = new THREE.MeshLambertMaterial({ color: 0xffccff });
                    else var dian_material = new THREE.MeshLambertMaterial({ color: 0x33ff00 });
                    var star = new THREE.Mesh(dian_geometry, dian_material);
                    scene.add(star);
                    star.position.x = 10000 + 2000 * (j - 110);
                    star.position.y = ret[j] * 20000 + 10000;
                    star.position.z = -50000;
                }
            })
        });
        titleLeft('normal.', 500000, tL1);   //0
        titleRight('nmap.', 450000, tR1);    //0
        titleLeft('smurf.', 400000, tL2);     //0
        titleRight('neptune.', 350000, tR2);    //0
        titleLeft('ping of death', 300000, tL3);     //1
        titleRight('syn flood', 250000, tR3);    //1
        titleLeft('guessing password', 200000, tL4);     //0
        titleRight('buffer overflow', 150000, tR4);    //0
        titleLeft('port scan', 100000, tL5);    //1
        titleRight('ping sweep', 50000, tR5);     //0
        titleLeft('land', 0, tL6);      //0
        titleRight('back', -50000, tR6);    //0 
    }

    //添加坐标变量
    function axisflag(x1, y1, x2, y2, z) {
        var material = new THREE.MeshPhongMaterial({
            color: 0x66ccff,
            specular: 0x66ccff,
            shininess: 0
        });
        var mesh = new THREE.Mesh(new THREE.TextGeometry('date', {
            font: font,
            size: 800,
            height: 800
        }), material);
        mesh.position.set(x1, y1, z);
        scene.add(mesh);
        var mesh = new THREE.Mesh(new THREE.TextGeometry('record_ratio', {
            font: font,
            size: 800,
            height: 800
        }), material);
        mesh.position.set(x2, y2, z);
        scene.add(mesh);
    }
    axisflag(32000, 8000, 1000, 32000, 450000);
    axisflag(32000, 8000, 1000, 32000, 350000);
    axisflag(-32000, 8000, -8000, 32000, 500000);
    axisflag(-32000, 8000, -8000, 32000, 400000);
    axisflag(32000, 8000, 1000, 32000, 250000);
    axisflag(32000, 8000, 1000, 32000, 150000);
    axisflag(-32000, 8000, -8000, 32000, 300000);
    axisflag(-32000, 8000, -8000, 32000, 200000);
    axisflag(32000, 8000, 1000, 32000, 50000);
    axisflag(32000, 8000, 1000, 32000, -50000);
    axisflag(-32000, 8000, -8000, 32000, 100000);
    axisflag(-32000, 8000, -8000, 32000, 0);

    //添加坐标刻度
    //ystart,xstart画平行y,z轴的刻度时的起始y,x坐标
    //interval每隔多远画一个刻度
    //a y轴刻度的x坐标,b x轴刻度的y坐标,c层次
    function axisvalueRight(xstart, ystart, interval, a, b, c) {
        var materialtext = new THREE.MeshPhongMaterial({
            color: 0xffffff,
            specular: 0xffffff,
            shininess: 0
        });
        //right 1
        for (i = 0; i < 10; i++) {
            var x = xstart + interval * i;
            var value = i;
            var meshtextx = new THREE.Mesh(new THREE.TextGeometry(value, {
                font: font,
                size: 800,
                height: 0.1
            }), materialtext);
            meshtextx.position.set(x, b, c);
            scene.add(meshtextx);
        }
        for (i = 0; i < 10; i++) {
            var y = ystart + interval * i;
            var value = i / 10;
            var meshtextx = new THREE.Mesh(new THREE.TextGeometry(value, {
                font: font,
                size: 800,
                height: 0.1
            }), materialtext);
            meshtextx.position.set(a, y, c);
            scene.add(meshtextx);
        }
    }
    function axisvalueLeft(xstart, ystart, interval, a, b, c) {
        var materialtext = new THREE.MeshPhongMaterial({
            color: 0xffffff,
            specular: 0xffffff,
            shininess: 0
        });
        //right 1
        for (i = 0; i < 10; i++) {
            var x = -xstart - interval * i;
            var value = i;
            var meshtextx = new THREE.Mesh(new THREE.TextGeometry(value, {
                font: font,
                size: 800,
                height: 0.1
            }), materialtext);
            meshtextx.position.set(x, b, c);
            scene.add(meshtextx);
        }
        for (i = 0; i < 10; i++) {
            var y = ystart + interval * i;
            var value = i / 10;
            var meshtextx = new THREE.Mesh(new THREE.TextGeometry(value, {
                font: font,
                size: 800,
                height: 0.1
            }), materialtext);
            meshtextx.position.set(a, y, c);
            scene.add(meshtextx);
        }
    }
    axisvalueRight(10000, 10000, 2000, 8000, 8000, 450000);
    axisvalueRight(10000, 10000, 2000, 8000, 8000, 350000);
    axisvalueLeft(10000, 10000, 2000, -8000, 8000, 400000);
    axisvalueLeft(10000, 10000, 2000, -8000, 8000, 500000);
    axisvalueRight(10000, 10000, 2000, 8000, 8000, 250000);
    axisvalueRight(10000, 10000, 2000, 8000, 8000, 150000);
    axisvalueLeft(10000, 10000, 2000, -8000, 8000, 200000);
    axisvalueLeft(10000, 10000, 2000, -8000, 8000, 300000);
    axisvalueRight(10000, 10000, 2000, 8000, 8000, 50000);
    axisvalueRight(10000, 10000, 2000, 8000, 8000, -50000);
    axisvalueLeft(10000, 10000, 2000, -8000, 8000, 100000);
    axisvalueLeft(10000, 10000, 2000, -8000, 8000, 0);

    //画坐标方向
    function arrow(x1, y1, x2, y2, x3, y3, z, length) {
        var originx = new THREE.Vector3(x1, y1, z);//箭头始点坐标
        var terminusx = new THREE.Vector3(x2, y2, z);//箭头终点坐标
        var directionx = new THREE.Vector3().subVectors(terminusx, originx).normalize();//箭头方向
        var arrowx = new THREE.ArrowHelper(directionx, originx, length, 0xffffff);//箭头长度2500是指整个箭头长度
        scene.add(arrowx);//将箭头加入场景
        var originy = new THREE.Vector3(x1, y1, z);
        var terminusy = new THREE.Vector3(x3, y3, z);
        var directiony = new THREE.Vector3().subVectors(terminusy, originy).normalize();
        var arrowy = new THREE.ArrowHelper(directiony, originy, length, 0xffffff);
        scene.add(arrowy);
    }
    arrow(10000, 10000, 30000, 10000, 10000, 30000, 450000, 25000);
    arrow(10000, 10000, 30000, 10000, 10000, 30000, 350000, 25000);
    arrow(-10000, 10000, -30000, 10000, -10000, 30000, 500000, 25000);
    arrow(-10000, 10000, -30000, 10000, -10000, 30000, 400000, 25000);

    arrow(10000, 10000, 30000, 10000, 10000, 30000, 250000, 25000);
    arrow(10000, 10000, 30000, 10000, 10000, 30000, 150000, 25000);
    arrow(-10000, 10000, -30000, 10000, -10000, 30000, 300000, 25000);
    arrow(-10000, 10000, -30000, 10000, -10000, 30000, 200000, 25000);
    arrow(10000, 10000, 30000, 10000, 10000, 30000, 50000, 25000);
    arrow(10000, 10000, 30000, 10000, 10000, 30000, -50000, 25000);
    arrow(-10000, 10000, -30000, 10000, -10000, 30000, 100000, 25000);
    arrow(-10000, 10000, -30000, 10000, -10000, 30000, 0, 25000);
});
////////////////////////////////////////// need font end ////////////////////////////////////////////////////////
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);


render();

function render() {
    requestAnimationFrame(render);
    if (camera.position.z <= 0)
        camera.position.z = 550000;
    else
        camera.position.z -= 200;
    uniforms.time.value = frame;
    frame += .04;
    //  dateVerts();
    renderer.render(scene, camera);
}

var mouse = new THREE.Vector3();
var raycaster = new THREE.Raycaster();
function onClick(event) {
    event.preventDefault();
    //将屏幕像素坐标转化成camare坐标
    mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1;
    mouse.y = - (event.clientY / renderer.domElement.clientHeight) * 2 + 1;
    //设置射线的起点是相机
    raycaster.setFromCamera(mouse, camera);

    //将射线投影到屏幕，如果scene.children里的某个或多个形状相交，则返回这些形状
    //第二个参数是设置是否递归，默认是false，也就是不递归。当scene里面添加了Group对象的实例时，就需要设置这个参数为true
    //第一个参数不传scene.children也可以，传一个group.children或一个形状数组都可以（这样可以实现一些特别的效果如点击内部的效果）
    //另外，因为返回的是一个数组，所以遍历数组就可以获得所有相交的对象，当元素重叠时，特别有用
    var intersects = raycaster.intersectObjects(scene.children);

    if (intersects.length > 0) {
        var currObj = intersects[0].object;
        var datasource = localStorage.getItem('datasource');
        if (datasource == "default") {

        } else {
            if (currObj.name) {
                window.location.href = ('/analyse_lstm_g/?chart=-1&model=' + datasource + '&output=' + currObj.name);
            }
        }
    }
    renderer.render(scene, camera);
}
document.addEventListener("mousedown", onClick, false);
