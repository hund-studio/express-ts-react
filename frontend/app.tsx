import { FC, useState } from "react";
import { renderToString } from "react-dom/server";

const App: FC = () => {
	const [count, setCount] = useState(0);

	return (
		<h1>
			<button onClick={(_) => setCount(count + 1)}>Click</button> to increase
			count.
			<br />
			Count is : {count}
		</h1>
	);
};

const SSRApp = renderToString(<App />);

export { App, SSRApp };
