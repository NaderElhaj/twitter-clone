export default {
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    {
      name: 'comment',
      title: 'Comment',
      type: 'string',
    },
    {
      name:"username",
      title:"username",
      type:"string"
    },
    {
      name:"profileImg",
      title:"Profile Image",
      type:"string"
    },
    {
      name:"tweet",
      title:"Tweet",
      description:"Reference the Tweet that comment is associated to",
      type:"reference",
      to:{
        type:"tweet"
      }
    }
  ]
}
