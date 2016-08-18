import React from 'react'

export default class PostActions extends React.Component {
	render() {
		let { post } = this.props

		if (post.status === "publish") {
			return <div className="actions">
				{typeof post.liveblog_likes === 'number' ?
					<div className="likes-container">
						<span className="likes-counter">{post.liveblog_likes ? post.liveblog_likes : ''}</span>
						<button
							className="action-like"
							onClick={() => this.onLikePost()}
							disabled={this.state.liked}
						>{ this.state.liked ? "♥" : "♡" }</button>
					</div>
				: null}
			</div>
		} else if ( this.props.user.capabilities.publish_posts ) {
			return <div className="actions">
				<button
					className="secondary"
					onClick={()=>this.props.onRejectPost(this.props.post)}
				>Discard</button>
				<button
					className="primary"
					onClick={()=>this.props.onApprovePost(this.props.post)}
				>Publish</button>
			</div>
		} else {
			return null
		}
	}
}
