import s from './index.module.styl'
import React from 'react'
import Icon from '~co/common/icon'

export default class HelpersAvatar extends React.Component{
  shouldComponentUpdate(nextProps) {
    return (this.props.src != nextProps.src)
  }

  render() {
    const { className, src, size } = this.props

    if (src)
        return (
          <div className={s.avatar + ' ' + className}>
            <img src={'https://www.gravatar.com/avatar/'+src+'?d=mm&s='+(size||40)} />
          </div>
        )
    else
        return <Icon name='profile' className={this.props.className} />
  }
}