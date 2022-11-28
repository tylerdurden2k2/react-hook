import { Timer, CountDownHook } from "./Timer";

const Home = () => {
    return (
        <div>
            <h1>Hello Home Page</h1>
            <Timer />
            <hr
                style={{
                    width: "200px",
                    height: "2px",
                    backgroundColor: "white",
                    margin: "5px auto",
                }}
            />
            <CountDownHook />
        </div>
    );
};
export default Home;
