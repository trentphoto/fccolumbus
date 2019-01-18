import React from 'react'

interface IXLResponsiveHOCProps {
  ifBelow: () => any
  ifAbove: () => any
  breakpoint: number
}

class XLResponsiveHOC extends React.Component<IXLResponsiveHOCProps> {
  state = {
    width: 0,
    height: 0
  }

  componentDidMount() {
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  updateWindowDimensions = () => {
    if (window !== undefined) {
      this.setState({ width: window.innerWidth, height: window.innerHeight })
    }
  }

  render() {
    const { breakpoint } = this.props
    const { width } = this.state

    if (width > breakpoint) {
      return this.props.ifAbove()
    }
    return this.props.ifBelow()
  }
}

export default XLResponsiveHOC
