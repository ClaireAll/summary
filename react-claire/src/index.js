import ReactDOM from 'react-dom';
import './index.css';
import { App } from './router/app';
import { BrowserRouter } from 'react-router-dom';
// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);