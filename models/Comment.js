const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

const ReplySchema = new Schema(
    {
        //set custome id to avoid confusion with parent comment id
        replyId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },

        replyBody: {
            type: String
        },

        writtenBy: {
            type: String
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
        }
    },

    //Adding this to be able toaccept getters======================================
    {
        toJSON: {
          getters: true
        }
       
    }


)

const CommentSchema = new Schema(
{

    writtenBy: {
        type: String
    },

    commentBody: {
        type: String
    },

    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    },

    replies: [ReplySchema]

},

//Adding this to be able toaccept virtuals======================================
{
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
    }

);

// get total count of replies on retrieval
CommentSchema.virtual('replyCount').get(function() {
    return this.replies.length;
});

const Comment = model('Comment', CommentSchema);



module.exports = Comment;