var vertexHeight = 15000;
var planeDefinition = 100;
var planeSize = 1245000;
var totalObjects = 50000;
var frame = 0;
var i, j, datax = [10000, 10100, 10200, 10300, 10400, 10500, 10600, 10700, 10800, 10900], datay = [], particles = [], point;

$(document).ready(function () {
    $.getJSON('/recordnumber', function (ret) {
        var len_WCASZ0627345 = 0, WCASZ0627345 = [];
        var max_WCASZ0627345 = 0;
        for (var i = 0; i < 10; i++) {
            len_WCASZ0627345 += parseInt(ret[i]);
        };
        len_WCASZ0627345 /= 10;
        for (var i = 0; i < 10; i++) {
            WCASZ0627345[i] = Math.abs(ret[i] - len_WCASZ0627345) / len_WCASZ0627345;
            if (max_WCASZ0627345 < WCASZ0627345[i])
                max_WCASZ0627345 = WCASZ0627345[i];
        };

        for (var j = 0; j < 10; j++) {

            var dian_geometry = new THREE.SphereGeometry(500, 10, 10);
            if (WCASZ0627345[j] / max_WCASZ0627345 > 0.9) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff3300 });
            else if (WCASZ0627345[j] / max_WCASZ0627345 > 0.8) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff0066 });
            else if (WCASZ0627345[j] / max_WCASZ0627345 > 0.7) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff6699 });
            else if (WCASZ0627345[j] / max_WCASZ0627345 > 0.6) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff99cc });
            else if (WCASZ0627345[j] / max_WCASZ0627345 > 0.5) var dian_material = new THREE.MeshLambertMaterial({ color: 0xffccff });
            else var dian_material = new THREE.MeshLambertMaterial({ color: 0x33ff00 });
            var star = new THREE.Mesh(dian_geometry, dian_material);
            scene.add(star);
            star.position.x = -(10000 + 2000 * j);
            star.position.y = (WCASZ0627345[j] / max_WCASZ0627345) * 20000 + 10000;
            star.position.z = 500000;
        }

        var len_Z1D3XBOA = 0, Z1D3XBOA = [];
        var max_Z1D3XBOA = 0;
        for (var i = 10; i < 20; i++) {
            len_Z1D3XBOA += parseInt(ret[i]);
        };
        len_Z1D3XBOA /= 10;
        for (var i = 10; i < 20; i++) {
            Z1D3XBOA[i] = Math.abs(ret[i] - len_Z1D3XBOA) / len_Z1D3XBOA;
            if (max_Z1D3XBOA < Z1D3XBOA[i])
                max_Z1D3XBOA = Z1D3XBOA[i];
        };

        for (var j = 10; j < 20; j++) {
            var dian_geometry = new THREE.SphereGeometry(500, 10, 10);
            if (Z1D3XBOA[j] / max_Z1D3XBOA > 0.9) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff3300 });
            else if (Z1D3XBOA[j] / max_Z1D3XBOA > 0.7) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff0066 });
            else if (Z1D3XBOA[j] / max_Z1D3XBOA > 0.5) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff6699 });
            else if (Z1D3XBOA[j] / max_Z1D3XBOA > 0.3) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff99cc });
            else if (Z1D3XBOA[j] / max_Z1D3XBOA > 0.1) var dian_material = new THREE.MeshLambertMaterial({ color: 0xffccff });
            else var dian_material = new THREE.MeshLambertMaterial({ color: 0x33ff00 });
            var star = new THREE.Mesh(dian_geometry, dian_material);
            scene.add(star);
            star.position.x = 10000 + 2000 * (j - 10);
            star.position.y = (Z1D3XBOA[j] / max_Z1D3XBOA) * 20000 + 10000;
            star.position.z = 450000;
        }

        var len_5VM45975 = 0, VM45975 = [], max_5VM45975 = 0;
        for (var i = 20; i < 30; i++) {
            len_5VM45975 += parseInt(ret[i][0]);
        };
        len_5VM45975 /= 10;
        for (var i = 20; i < 30; i++) {
            VM45975[i] = Math.abs(ret[i] - len_5VM45975) / len_5VM45975;
            if (max_5VM45975 < VM45975[i])
                max_5VM45975 = VM45975[i];
        };

        for (var j = 20; j < 30; j++) {
            var dian_geometry = new THREE.SphereGeometry(500, 10, 10);
            if (VM45975[j] / max_5VM45975 > 0.9) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff3300 });
            else if (VM45975[j] / max_5VM45975 > 0.7) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff0066 });
            else if (VM45975[j] / max_5VM45975 > 0.5) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff6699 });
            else if (VM45975[j] / max_5VM45975 > 0.3) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff99cc });
            else if (VM45975[j] / max_5VM45975 > 0.1) var dian_material = new THREE.MeshLambertMaterial({ color: 0xffccff });
            else var dian_material = new THREE.MeshLambertMaterial({ color: 0x33ff00 });
            var star = new THREE.Mesh(dian_geometry, dian_material);
            scene.add(star);
            star.position.x = -(10000 + 2000 * (j - 20));
            star.position.y = (VM45975[j] / max_5VM45975) * 20000 + 10000;
            star.position.z = 400000;
        }

        var len_Z1D3XB0A = 0, Z1D3XB0A = [], max_Z1D3XB0A = 0;
        for (var i = 30; i < 40; i++) {
            len_Z1D3XB0A += parseInt(ret[i][0]);
        };
        len_Z1D3XB0A /= 10;
        for (var i = 30; i < 40; i++) {
            Z1D3XB0A[i] = Math.abs(ret[i] - len_Z1D3XB0A) / len_Z1D3XB0A;
            if (max_Z1D3XB0A < Z1D3XB0A[i])
                max_Z1D3XB0A = Z1D3XB0A[i];
        };

        for (var j = 30; j < 40; j++) {
            var dian_geometry = new THREE.SphereGeometry(500, 10, 10);
            if (Z1D3XB0A[j] / max_Z1D3XB0A > 0.9) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff3300 });
            else if (Z1D3XB0A[j] / max_Z1D3XB0A > 0.7) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff0066 });
            else if (Z1D3XB0A[j] / max_Z1D3XB0A > 0.5) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff6699 });
            else if (Z1D3XB0A[j] / max_Z1D3XB0A > 0.3) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff99cc });
            else if (Z1D3XB0A[j] / max_Z1D3XB0A > 0.1) var dian_material = new THREE.MeshLambertMaterial({ color: 0xffccff });
            else var dian_material = new THREE.MeshLambertMaterial({ color: 0x33ff00 });
            var star = new THREE.Mesh(dian_geometry, dian_material);
            scene.add(star);
            star.position.x = 10000 + 2000 * (j - 30);
            star.position.y = (Z1D3XB0A[j] / max_Z1D3XB0A) * 20000 + 10000;
            star.position.z = 350000;
        }

        var len_Z4YAZWRB = 0, Z4YAZWRB = [], max_Z4YAZWRB = 0;
        for (var i = 40; i < 50; i++) {
            len_Z4YAZWRB += parseInt(ret[i][0]);
        };
        len_Z4YAZWRB /= 10;
        for (var i = 40; i < 50; i++) {
            Z4YAZWRB[i] = Math.abs(ret[i] - len_Z4YAZWRB) / len_Z4YAZWRB;
            if (max_Z4YAZWRB < Z4YAZWRB[i])
                max_Z4YAZWRB = Z4YAZWRB[i];
        };

        for (var j = 40; j < 50; j++) {

            var dian_geometry = new THREE.SphereGeometry(500, 10, 10);
            if (Z4YAZWRB[j] / max_Z4YAZWRB > 0.9) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff3300 });
            else if (Z4YAZWRB[j] / max_Z4YAZWRB > 0.7) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff0066 });
            else if (Z4YAZWRB[j] / max_Z4YAZWRB > 0.5) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff6699 });
            else if (Z4YAZWRB[j] / max_Z4YAZWRB > 0.3) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff99cc });
            else if (Z4YAZWRB[j] / max_Z4YAZWRB > 0.1) var dian_material = new THREE.MeshLambertMaterial({ color: 0xffccff });
            else var dian_material = new THREE.MeshLambertMaterial({ color: 0x33ff00 });
            var star = new THREE.Mesh(dian_geometry, dian_material);
            scene.add(star);
            star.position.x = -(10000 + 2000 * (j - 40));
            star.position.y = (Z4YAZWRB[j] / max_Z4YAZWRB) * 20000 + 10000;
            star.position.z = 300000;
        }

        var len_Z4YAZVXM = 0, Z4YAZVXM = [], max_Z4YAZVXM = 0;
        for (var i = 50; i < 60; i++) {
            len_Z4YAZVXM += parseInt(ret[i][0]);
        };
        len_Z4YAZVXM /= 10;
        for (var i = 50; i < 60; i++) {
            Z4YAZVXM[i] = Math.abs(ret[i] - len_Z4YAZVXM) / len_Z4YAZVXM;
            if (max_Z4YAZVXM < Z4YAZVXM[i])
                max_Z4YAZVXM = Z4YAZVXM[i];
        };

        for (var j = 50; j < 60; j++) {

            var dian_geometry = new THREE.SphereGeometry(500, 10, 10);
            if (Z4YAZVXM[j] / max_Z4YAZVXM > 0.9) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff3300 });
            else if (Z4YAZVXM[j] / max_Z4YAZVXM > 0.7) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff0066 });
            else if (Z4YAZVXM[j] / max_Z4YAZVXM > 0.5) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff6699 });
            else if (Z4YAZVXM[j] / max_Z4YAZVXM > 0.3) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff99cc });
            else if (Z4YAZVXM[j] / max_Z4YAZVXM > 0.1) var dian_material = new THREE.MeshLambertMaterial({ color: 0xffccff });
            else var dian_material = new THREE.MeshLambertMaterial({ color: 0x33ff00 });
            var star = new THREE.Mesh(dian_geometry, dian_material);
            scene.add(star);
            star.position.x = 10000 + 2000 * (j - 50);
            star.position.y = (Z4YAZVXM[j] / max_Z4YAZVXM) * 20000 + 10000;
            star.position.z = 250000;
        }

        var len_Z4YAZW4W = 0, Z4YAZW4W = [], max_Z4YAZW4W = 0;
        for (var i = 60; i < 70; i++) {
            len_Z4YAZW4W += parseInt(ret[i][0]);
        };
        len_Z4YAZW4W /= 10;
        for (var i = 60; i < 70; i++) {
            Z4YAZW4W[i] = Math.abs(ret[i] - len_Z4YAZW4W) / len_Z4YAZW4W;
            if (max_Z4YAZW4W < Z4YAZW4W[i])
                max_Z4YAZW4W = Z4YAZW4W[i];
        };

        for (var j = 60; j < 70; j++) {

            var dian_geometry = new THREE.SphereGeometry(500, 10, 10);
            if (Z4YAZW4W[j] / max_Z4YAZW4W > 0.9) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff3300 });
            else if (Z4YAZW4W[j] / max_Z4YAZW4W > 0.7) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff0066 });
            else if (Z4YAZW4W[j] / max_Z4YAZW4W > 0.5) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff6699 });
            else if (Z4YAZW4W[j] / max_Z4YAZW4W > 0.3) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff99cc });
            else if (Z4YAZW4W[j] / max_Z4YAZW4W > 0.1) var dian_material = new THREE.MeshLambertMaterial({ color: 0xffccff });
            else var dian_material = new THREE.MeshLambertMaterial({ color: 0x33ff00 });
            var star = new THREE.Mesh(dian_geometry, dian_material);
            scene.add(star);
            star.position.x = -(10000 + 2000 * (j - 60));
            star.position.y = (Z4YAZW4W[j] / max_Z4YAZW4W) * 20000 + 10000;
            star.position.z = 200000;
        }

        var len_Z4YAZVV4 = 0, Z4YAZVV4 = [], max_Z4YAZVV4 = 0;
        for (var i = 70; i < 80; i++) {
            len_Z4YAZVV4 += parseInt(ret[i][0]);
        };
        len_Z4YAZVV4 /= 10;
        for (var i = 70; i < 80; i++) {
            Z4YAZVV4[i] = Math.abs(ret[i] - len_Z4YAZVV4) / len_Z4YAZVV4;
            if (max_Z4YAZVV4 < Z4YAZVV4[i])
                max_Z4YAZVV4 = Z4YAZVV4[i];
        };

        for (var j = 70; j < 80; j++) {

            var dian_geometry = new THREE.SphereGeometry(500, 10, 10);
            if (Z4YAZVV4[j] / max_Z4YAZVV4 > 0.9) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff3300 });
            else if (Z4YAZVV4[j] / max_Z4YAZVV4 > 0.7) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff0066 });
            else if (Z4YAZVV4[j] / max_Z4YAZVV4 > 0.5) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff6699 });
            else if (Z4YAZVV4[j] / max_Z4YAZVV4 > 0.3) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff99cc });
            else if (Z4YAZVV4[j] / max_Z4YAZVV4 > 0.1) var dian_material = new THREE.MeshLambertMaterial({ color: 0xffccff });
            else var dian_material = new THREE.MeshLambertMaterial({ color: 0x33ff00 });
            var star = new THREE.Mesh(dian_geometry, dian_material);
            scene.add(star);
            star.position.x = 10000 + 2000 * (j - 70);
            star.position.y = (Z4YAZVV4[j] / max_Z4YAZVV4) * 20000 + 10000;
            star.position.z = 150000;
        }

        var len_537TT03OT = 0, _537TT03OT = [], max_537TT03OT = 0;
        for (var i = 80; i < 90; i++) {
            len_537TT03OT += parseInt(ret[i][0]);
        };
        len_537TT03OT /= 10;
        for (var i = 80; i < 90; i++) {
            _537TT03OT[i] = Math.abs(ret[i] - len_537TT03OT) / len_537TT03OT;
            if (max_537TT03OT < _537TT03OT[i])
                max_537TT03OT = _537TT03OT[i];
        };

        for (var j = 80; j < 90; j++) {

            var dian_geometry = new THREE.SphereGeometry(500, 10, 10);
            if (_537TT03OT[j] / max_537TT03OT > 0.9) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff3300 });
            else if (_537TT03OT[j] / max_537TT03OT > 0.7) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff0066 });
            else if (_537TT03OT[j] / max_537TT03OT > 0.5) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff6699 });
            else if (_537TT03OT[j] / max_537TT03OT > 0.3) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff99cc });
            else if (_537TT03OT[j] / max_537TT03OT > 0.1) var dian_material = new THREE.MeshLambertMaterial({ color: 0xffccff });
            else var dian_material = new THREE.MeshLambertMaterial({ color: 0x33ff00 });
            var star = new THREE.Mesh(dian_geometry, dian_material);
            scene.add(star);
            star.position.x = -(10000 + 2000 * (j - 80));
            star.position.y = (_537TT03OT[j] / max_537TT03OT) * 20000 + 10000;
            star.position.z = 100000;
        }

        var len_6VY152TL = 0, _6VY152TL = [], max_6VY152TL = 0;
        for (var i = 90; i < 100; i++) {
            len_6VY152TL += parseInt(ret[i][0]);
        };
        len_6VY152TL /= 10;
        for (var i = 90; i < 100; i++) {
            _6VY152TL[i] = Math.abs(ret[i] - len_6VY152TL) / len_6VY152TL;
            if (max_6VY152TL < _6VY152TL[i])
                max_6VY152TL = _6VY152TL[i];
        };

        for (var j = 90; j < 100; j++) {

            var dian_geometry = new THREE.SphereGeometry(500, 10, 10);
            if (_6VY152TL[j] / max_6VY152TL > 0.9) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff3300 });
            else if (_6VY152TL[j] / max_6VY152TL > 0.7) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff0066 });
            else if (_6VY152TL[j] / max_6VY152TL > 0.5) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff6699 });
            else if (_6VY152TL[j] / max_6VY152TL > 0.3) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff99cc });
            else if (_6VY152TL[j] / max_6VY152TL > 0.1) var dian_material = new THREE.MeshLambertMaterial({ color: 0xffccff });
            else var dian_material = new THREE.MeshLambertMaterial({ color: 0x33ff00 });
            var star = new THREE.Mesh(dian_geometry, dian_material);
            scene.add(star);
            star.position.x = 10000 + 2000 * (j - 90);
            star.position.y = (_6VY152TL[j] / max_6VY152TL) * 20000 + 10000;
            star.position.z = 50000;
        }

        var len_Z4YAZTEF = 0, Z4YAZTEF = [], max_Z4YAZTEF = 0;
        for (var i = 100; i < 110; i++) {
            len_Z4YAZTEF += parseInt(ret[i][0]);
        };
        len_Z4YAZTEF /= 10;
        for (var i = 100; i < 110; i++) {
            Z4YAZTEF[i] = Math.abs(ret[i] - len_Z4YAZTEF) / len_Z4YAZTEF;
            if (max_Z4YAZTEF < Z4YAZTEF[i])
                max_Z4YAZTEF = Z4YAZTEF[i];
        };

        for (var j = 100; j < 110; j++) {

            var dian_geometry = new THREE.SphereGeometry(500, 10, 10);
            if (Z4YAZTEF[j] / max_Z4YAZTEF > 0.9) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff3300 });
            else if (Z4YAZTEF[j] / max_Z4YAZTEF > 0.7) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff0066 });
            else if (Z4YAZTEF[j] / max_Z4YAZTEF > 0.5) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff6699 });
            else if (Z4YAZTEF[j] / max_Z4YAZTEF > 0.3) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff99cc });
            else if (Z4YAZTEF[j] / max_Z4YAZTEF > 0.1) var dian_material = new THREE.MeshLambertMaterial({ color: 0xffccff });
            else var dian_material = new THREE.MeshLambertMaterial({ color: 0x33ff00 });
            var star = new THREE.Mesh(dian_geometry, dian_material);
            scene.add(star);
            star.position.x = -(10000 + 2000 * (j - 100));
            star.position.y = (Z4YAZTEF[j] / max_Z4YAZTEF) * 20000 + 10000;
            star.position.z = 0;
        }

        var len_Z4YAZTKF = 0, Z4YAZTKF = [], max_Z4YAZTKF = 0;
        for (var i = 110; i < 120; i++) {
            len_Z4YAZTKF += parseInt(ret[i][0]);
        };
        len_Z4YAZTKF /= 10;
        for (var i = 110; i < 120; i++) {
            Z4YAZTKF[i] = Math.abs(ret[i] - len_Z4YAZTKF) / len_Z4YAZTKF;
            if (max_Z4YAZTKF < Z4YAZTKF[i])
                max_Z4YAZTKF = Z4YAZTKF[i];
        };

        for (var j = 110; j < 120; j++) {

            var dian_geometry = new THREE.SphereGeometry(500, 10, 10);
            if (Z4YAZTKF[j] / max_Z4YAZTKF > 0.9) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff3300 });
            else if (Z4YAZTKF[j] / max_Z4YAZTKF > 0.7) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff0066 });
            else if (Z4YAZTKF[j] / max_Z4YAZTKF > 0.5) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff6699 });
            else if (Z4YAZTKF[j] / max_Z4YAZTKF > 0.3) var dian_material = new THREE.MeshLambertMaterial({ color: 0xff99cc });
            else if (Z4YAZTKF[j] / max_Z4YAZTKF > 0.1) var dian_material = new THREE.MeshLambertMaterial({ color: 0xffccff });
            else var dian_material = new THREE.MeshLambertMaterial({ color: 0x33ff00 });
            var star = new THREE.Mesh(dian_geometry, dian_material);
            scene.add(star);
            star.position.x = 10000 + 2000 * (j - 110);
            star.position.y = (Z4YAZTKF[j] / max_Z4YAZTKF) * 20000 + 10000;
            star.position.z = -50000;
        }
    })
});

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

    //添加标题
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
        var mesh = new THREE.Mesh(new THREE.TextGeometry('workload_offset', {
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
        if (currObj.name) {
            window.location.href = ('analyse_fp/?chart=-1&model=' + currObj.name);
        }
    }
    renderer.render(scene, camera);
}
document.addEventListener("mousedown", onClick, false);