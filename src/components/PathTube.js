import * as THREE from "three";

const createTube = (scene) => {
  //========== the curve points we copied from Blender
  // var points = [
  //   [-1.5, 0.0, -0.8546158671379089],
  //   [-1.0, 1.0, -0.8546158671379089],
  //   [1.0, 1.0, -0.6097015142440796],
  //   [1.5, 0.0, -0.6097015142440796],
  //   [1.1826586723327637, -1.7173765897750854, 0.0],
  //   [-0.292044997215271, -2.632066249847412, 0.0],
  //   [-3.185451030731201, -1.4747037887573242, 0.0],
  //   [-3.4654581546783447, 0.7466855049133301, 0.36040833592414856],
  //   [-2.252094268798828, 4.2001051902771, 0.2986741364002228],
  //   [3.0680389404296875, 6.066819190979004, 1.437369465827942],
  //   [5.457432270050049, -1.7547111511230469, 1.99738347530365],
  // ];

	var points = [
		// [-2.4516806602478027, -0.5411519408226013, 0.0] ,
		// [0.2502474784851074, -0.17560593783855438, 0.0] ,
		// [2.3435494899749756, 1.1679437160491943, 0.0] ,
		// [3.8138909339904785, 0.20526452362537384, 0.0] ,
		// [5.56796932220459, -0.3358873724937439, 0.0] ,
		// [7.9005208015441895, 0.3545478582382202, 0.0] ,
		// [9.262730598449707, 1.3435497283935547, 0.0] ,
		// [12.845529556274414, 0.44784992933273315, 0.0] ,
		// [13.965154647827148, -0.9516808390617371, 0.0] ,
		// [17.753217697143555, 0.24258549511432648, 0.0] ,
    // [-0.05, 1.07, 0.224]
    // [-0.05, 0.224, 1.07],
    // [0, .5, .3],
    // [0.012190580368041992, 1.7053031921386719, 1.9996873140335083] ,
    // [0.021307053044438362, -0.41120219230651855, 1.095573902130127] ,
    
    [5.098554611206055, -0.06699627637863159, 3.7338273525238037] ,
  [1.9657745361328125, 3.4806270599365234, 1.9996873140335083] ,
  [-0.004730133339762688, 1.6996629238128662, 1.9996873140335083] ,
  [0.004386339336633682, -0.41684243083000183, 1.095573902130127] ,
	];

  //========== scale the curve to make it as large as you want
  var scale = 1;

  //========== Convert the array of points into vertices (in Blender the z axis is UP so we swap the z and y)
  for (var i = 0; i < points.length; i++) {
    var x = points[i][0] * scale;
    var y = points[i][1] * scale;
    var z = points[i][2] * scale;
    points[i] = new THREE.Vector3(x, z, -y);
  }

  //========== Create a path from the points
  var curvePath = new THREE.CatmullRomCurve3(points);
  var radius = 0.25;

  //========== Create a tube geometry that represents our curve
  var geometry = new THREE.TubeGeometry(curvePath, 600, radius, 10, false);

  //========== Set a different color for each face of the tube. (a triangle represents 1 face in WebGL)
  // for (var i = 0, j = geometry.faces.length; i < j; i++) {
  //   geometry.faces[i].color = new THREE.Color(
  //     "hsl(" + Math.floor(Math.random() * 290) + ",50%,50%)"
  //   );
  // }
  //========== add tube to the scene
  // var material = new THREE.MeshBasicMaterial({
  //   // vertexColors: THREE.FaceColors,
	// 	color: 'red',
  //   side: THREE.DoubleSide,
  //   transparent: true,
  //   opacity: 1,
  // });
  // var tube = new THREE.Mesh(geometry, material);
  // scene.add(tube);

	return { 
		curvePath
	}
};

export default createTube;
