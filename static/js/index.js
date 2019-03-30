var vertexHeight = 15000;
var planeDefinition = 100;
var planeSize = 1245000;
var totalObjects = 50000;
var frame = 0;
var i, j, datax = [10000, 10100, 10200, 10300, 10400, 10500, 10600, 10700, 10800, 10900], datay = [], particles = [], point;
var container = document.createElement('div');
document.body.appendChild(container);

var camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 1, 400000)
camera.position.x = 0;
camera.position.z = 550000;
camera.position.y = 10000;
camera.lookAt(new THREE.Vector3(0, 6000, 0));


var scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x23233f, 1, 300000);
var light = new THREE.DirectionalLight(0xffffff);
light.position.set(0, 10000, 550000);
light.density = 5000000;
light.shadow.camera.far = 4000000;
scene.add(light);

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
//背景闪烁
for (i = 0; i < 100; i++) {
    Point = new THREE.PointLight(0xff0000, 1000, 1);
    scene.add(Point);
    scene.add(new THREE.PointLightHelper(Point, 1200));
    Point.position.x = Math.random() * planeSize - (planeSize * .5);
    Point.position.y = Math.random() * 40000 + 40000;
    Point.position.z = Math.random() * planeSize - (planeSize * .5);
}
for (i = 0; i < 100; i++) {
    Point = new THREE.PointLight(0xffff00, 1000, 1);
    scene.add(Point);
    scene.add(new THREE.PointLightHelper(Point, 1200));
    Point.position.x = Math.random() * planeSize - (planeSize * .5);
    Point.position.y = Math.random() * 40000 + 40000;
    Point.position.z = Math.random() * planeSize - (planeSize * .5);
}
for (i = 0; i < 100; i++) {
    Point = new THREE.PointLight(0xff0033, 1000, 1);
    scene.add(Point);
    scene.add(new THREE.PointLightHelper(Point, 1200));
    Point.position.x = Math.random() * planeSize - (planeSize * .5);
    Point.position.y = Math.random() * 40000 + 40000;
    Point.position.z = Math.random() * planeSize - (planeSize * .5);
}
for (i = 0; i < 100; i++) {
    Point = new THREE.PointLight(0x0099ff, 1000, 1);
    scene.add(Point);
    scene.add(new THREE.PointLightHelper(Point, 1200));
    Point.position.x = Math.random() * planeSize - (planeSize * .5);
    Point.position.y = Math.random() * 40000 + 40000;
    Point.position.z = Math.random() * planeSize - (planeSize * .5);
}


var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);


render();

function render() {
    requestAnimationFrame(render);
    if (camera.position.z <= -622500)
        camera.position.z = 550000;
    else
        camera.position.z -= 200;
    uniforms.time.value = frame;
    frame += .04;
    renderer.render(scene, camera);
}