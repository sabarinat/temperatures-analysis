const { Joi, Segments} = require('celebrate')

const userCreate =  {
    [Segments.BODY]: Joi.object().keys({
        first_name: Joi.string().min(2).max(30).required(),
        last_name: Joi.string().min(2).max(30),
        password: Joi.string().required(),
        email: Joi.string().email(),
        mobile_number: Joi.string(),
      }),
}

const driverCreate =  {
    [Segments.BODY]: Joi.object().keys({
        driver_name: Joi.string().alphanum().min(2).max(30).required(),
        password: Joi.string().required(),
        email: Joi.string().email(),
        mobile_no: Joi.string(),
      }),
}

const customerCreate =  {
        [Segments.BODY]: Joi.object().keys({
            first_name: Joi.string().alphanum().min(2).max(30).required(),
            last_name: Joi.string().alphanum().min(1).max(30),
            email: Joi.string().email(),
            mobile_number: Joi.string(),
            address1: Joi.string(),
            address2: Joi.string(),
            url1: Joi.string(),
            url2: Joi.string(),

            area1: Joi.number(),
            area2: Joi.number(),
            boxes_get: Joi.number(),
            boxes_given: Joi.number(),
            customer_type: Joi.number(),
            mealAreaData: Joi.array().items(Joi.object({
                week_day: Joi.number().integer(),
                meal_type: Joi.number().integer(),
                area_id: Joi.number().integer()
             }))
          }),
    }

const customerUpdate =  {
    [Segments.BODY]: Joi.object().keys({
        first_name: Joi.string().alphanum().min(2).max(30),
        last_name: Joi.string().alphanum().min(1).max(30),
        email: Joi.string().email(),
        mobile_number: Joi.string(),
        address1: Joi.string(),
        address2: Joi.string(),
        url1: Joi.string(),
        url2: Joi.string(),
        is_deleted : Joi.number(),
        area1: Joi.number(),
        area2: Joi.number(),
        boxes_get: Joi.number(),
        boxes_given: Joi.number(),
        mealAreaData: Joi.array().items(Joi.object({
            week_day: Joi.number().integer(),
            meal_type: Joi.number().integer(),
            area_id: Joi.number().integer()
         }))
      }),
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.number().required()
        })
    }


    const areaCreate =  {
        [Segments.BODY]: Joi.object().keys({
            area_name: Joi.string().alphanum().min(2).max(30).required(),
          }),
    }

    const areaUpdate =  {
        [Segments.BODY]: Joi.object().keys({
            area_name: Joi.string().alphanum().min(2).max(30),
            is_deleted: Joi.number()
          }),
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.number().required()
        })
    }

const routeCreate =  {
        [Segments.BODY]: Joi.object().keys({
            route_name: Joi.string().min(2).max(30),
            meal_type: Joi.number().integer(),
            area_id: Joi.number().integer(),
            week_day: Joi.number().integer(),
            customer_data: Joi.array().items(Joi.object({
                area_id: Joi.number().integer(),
                customer_id: Joi.number().integer(),
             }))
          }),

          
}

const routeUpdate =  {
    [Segments.BODY]: Joi.object().keys({
        route_name: Joi.string().min(2).max(30),
        meal_type: Joi.number().integer(),
        area_id: Joi.number().integer(),
        driver_id: Joi.number().integer(),
        is_deleted: Joi.number().integer(),
        week_day: Joi.number().integer(),
        customer_data: Joi.array().items(Joi.object({
        area_id: Joi.number().integer(),
        customer_id: Joi.number().integer(),
         }))
      }),
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}

const customerBoxUpdate =  {
    [Segments.BODY]: Joi.object().keys({
        box_get: Joi.number().integer(),
        box_given: Joi.number().integer(),
        route_customer_id: Joi.number().integer()
      }),
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}


module.exports = {
    customerCreate: customerCreate,
    customerUpdate: customerUpdate,
    areaCreate: areaCreate,
    areaUpdate: areaUpdate,
    routeCreate: routeCreate,
    routeUpdate: routeUpdate,
    userCreate: userCreate,
    driverCreate: driverCreate,
    customerBoxUpdate: customerBoxUpdate
}