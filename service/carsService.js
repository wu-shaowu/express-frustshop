const {
    getcars,
    updataCars,
    getUsersCars,
    updataCarsNum,
    deleteCars,
    deleteAllCars,
    addcars,
} = require('../dao/carsDao')
module.exports.getcars = async () => {
    const data = await getcars();
    return {
        message: '成功获得水果的数据',
        status: 1,
        data,
    }
};

module.exports.addcars = async (updata) => {
        const data = await addcars(updata);

        if (data) {
            return {
                message: '成功添加购物车数据',
                status: 1,
                data,
            }
        } else {
            return {
                message: '失败添加购物车数据',
                status: 0,
                data,
            }
        
    } 


};
module.exports.updataCars = async (updata) => {
    const data = await updataCarsNum(updata)
    console.log(data);
    if (data) {
        return {
            message: '成功更新购物车数据',
            status: 1,
            data,
        }
    } else {
        return {
            message: '失败更新购物车数据',
            status: 0,
            data,
        }
    }
    // if (updata.weight) {
    //     const data = await updataCars(updata);
    //     console.log(data);
    //     if (data) {
    //         return {
    //             message: '成功更新购物车数据',
    //             status: 1,
    //             data,
    //         }
    //     } else {
    //         return {
    //             message: '失败更新购物车数据',
    //             status: 0,
    //             data,
    //         }
    //     }
    // } else {
    //     const data = await updataCarsNum(updata)
    //     console.log(data);
    //     if (data) {
    //         return {
    //             message: '成功更新购物车数据',
    //             status: 1,
    //             data,
    //         }
    //     } else {
    //         return {
    //             message: '失败更新购物车数据',
    //             status: 0,
    //             data,
    //         }
    //     }
    // }


};
module.exports.getUsersCars = async (usersId) => {
    const data = await getUsersCars(usersId);
    if (data.length > 0) {
        return {
            message: '成功获得购物车数据',
            status: 1,
            data,
        }
    } else {
        return {
            message: '失败获得购物车数据',
            status: 0,
            data,
        }
    }



};
module.exports.deleteCars = async (usersId) => {
    const data = await deleteCars(usersId);
    if (data) {
        return {
            message: '成功删除购物车数据',
            status: 1,
            data,
        }
    } else {
        return {
            message: '失败删除购物车数据',
            status: 0,
            data,
        }
    }
};
module.exports.deleteAllCars = async (usersId) => {
    const data = await deleteAllCars(usersId);
    console.log(data);
    if (data) {
        return {
            message: '成功删除全部购物车数据',
            status: 1,
            data,
        }
    } else {
        return {
            message: '失败删除全部购物车数据', 
            status: 0,
            data,
        }
    }
};