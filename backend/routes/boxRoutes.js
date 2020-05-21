import {getBoxSize, updateBoxSize} from '../controllers/boxController';

const routes = (app) => {
    app.route('/box')
        //Get endpoint
        .get(getBoxSize)
        //POST endpoint
        .post(updateBoxSize);

}

export default routes;