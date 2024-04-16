"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// User Controller:

const User = require('../models/user')

module.exports = {

    list: async (req, res) => {
         /*
            #swagger.tags = ["Users"]
            #swagger.summary = "List Users"
            #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */

        const data = await res.getModellist(User)

        // res.status(200).send({
        //     error: false,
        //     details: await res.getModelListDetails(User),
        //     data
        // })

        // FOR REACT PROJECT:
        res.status(200).send(data)
    },

    create: async (req, res) => {
         /*
            #swagger.tags = ["Users"]
            #swagger.summary = "Create User"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "username": "test",
                    "password": "1234",
                    "email": "test@site.com",
                    "first_name": "test",
                    "last_name": "test",
                }
            }
        */

        // Disallow setting admin/staff:
        req.body.is_staff = false
        req.body.is_superadmin = false

        const data = await User.create(req.body)

        res.status(201).send({
            error: false,
            data
        })


    },

    read: async (req, res) => {

    },

    update: async (req, res) => {

    },

    delete: async (req, res) => {

    },

}