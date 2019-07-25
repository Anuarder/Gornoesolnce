import request from "graphql-request";

const address = "";

export default {
    async getApartmentInfo(apNumber) {
        try{
            const query = `query (
                $apNumber: Int!
                ){
                apartmentByNumber(apNumber: $apNumber) {
                    apArea,
                    apIsSold,
                    apNumber,
                    apRoomNumber,
                    blockNumber,
                    floorNumber
                }
            }`;
            let result = await request(address, query, {
                apNumber
            });

            return result;
        }catch(err){
            console.log(err);
        }
    },
    async getApartments() {
        try{
            const query = `query{
                apartments{
                    apArea,
                    apIsSold,
                    apNumber,
                    apRoomNumber,
                    blockNumber,
                    floorNumber
                }
            }`;
            let result = await request(address, query);

            return result;
        }catch(err){
            console.log(err);
        }
    }
};
