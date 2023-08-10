//TODO: Add useState to use values inputted to the respective areas

export default function SendPost() {
	const sendRequest = () => {
		const time: number = new Date().getTime();
		fetch("http://192.168.1.12:3001/api/", {
			method: "POST",
			body: JSON.stringify({
				timestamp: time,
				gyro: {
					x: 100,
					y: 50,
					z: 20,
				},
				accel: {
					x: 1.2,
					y: 0.75,
					z: 2,
				},
				bmp: {
					p: 1100,
					a: 750,
					ca: 1100,
				},
				angle: {
					pitch: 25,
					roll: 35,
					yaw: 50,
				},
				velocity: 50,
				altitude: 1200,
				amp: 10,
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				// Handle data
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	return (
		<div className="pages sendPostPage">
			<header>
				<h1 className="title">Send Post Request</h1>
			</header>

			<div className="inputWrapper gyro">
				<h2 className="subTitle">Gyro</h2>

				<div className="inputs">
					<input type="number" id="gyroX" placeholder="X" inputMode="numeric" />
					<input type="number" id="gyroY" placeholder="Y" inputMode="numeric" />
					<input type="number" id="gyroZ" placeholder="Z" inputMode="numeric" />
				</div>
			</div>
            <div className="inputWrapper accel">
				<h2 className="subTitle">Accelerometer</h2>

				<div className="inputs">
					<input type="number" id="accelPitch" placeholder="Pitch" inputMode="numeric" />
					<input type="number" id="accelRoll" placeholder="Roll" inputMode="numeric" />
					<input type="number" id="accelYaw" placeholder="Yaw" inputMode="numeric" />
				</div>
			</div>
            <div className="inputWrapper magnetometer">
				<h2 className="subTitle">Magnetometer</h2>

				<div className="inputs">
					<input type="number" id="magnetometerX" placeholder="X" inputMode="numeric" />
					<input type="number" id="magnetometerY" placeholder="Y" inputMode="numeric" />
					<input type="number" id="magnetometerZ" placeholder="Z" inputMode="numeric" />
				</div>
			</div>
            <button className="submitBtn" onClick={sendRequest}>
                Send Post Request
            </button>
		</div>
	);
}
