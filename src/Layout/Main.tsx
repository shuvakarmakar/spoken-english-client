import { Outlet } from "react-router";

const Main = () => {
    return (
        <>
            <div className="header">{/* Header */}</div>

            {/* main  */}
            <div className="main">
                <Outlet></Outlet>
            </div>

            {/* Footer */}

            <div className="Footer">

            </div>


        </>
    );
};

export default Main;