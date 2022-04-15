const graphql = require('graphql');
const_ = require('lodash');

const{GraphQLObjectType, GraphQLString, GraphQLSchema} = graphql;

// lets add dummy data
var book=[
    {name:'name one', genre:'genrer1', id:'1'}
];

const BookType = new GraphQLObjectType({
    name:'Book',
    fields:() => ({
        id: {type: GraphQLString},
        name:{type:GraphQLString},
        genre:{type:GraphQLString}
    })

});

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        book:{
            type: BookType,
            args:{id:{type:GraphQLString}},
            resolve(parent, args){
                // return Book.findById(args.id);
                return _.find(books,{id:args.id})

            }
        }
    }

});

module.exports = new GraphQLSchema({
    query:RootQuery
});
