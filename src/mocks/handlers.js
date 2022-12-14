import { rest } from "msw"

const baseURL = "https://api-practice-for-cozy.herokuapp.com/"

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`,(req, res, ctx) => {
        return res(ctx.json({
            "pk": 2,
            "username": "LadyFrogger",
            "email": "",
            "first_name": "",
            "last_name": "",
            "profile_id": 2,
            "profile_image": "https://res.cloudinary.com/a-fluff-of-cotton/image/upload/v1/media/images/lofi_generator_qaqwqd",
            })
        );
    }),
    rest.post(`${baseURL}dj-rest-auth/logoout/`, (reg, res, ctx) => {
        return res(ctx.status(200));
    }),
];