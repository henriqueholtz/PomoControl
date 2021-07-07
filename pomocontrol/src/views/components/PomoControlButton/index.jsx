import PropTypes from 'prop-types'

export function PomoControlButton({text}) {

    return <button type="button">{text}</button>
}

PomoControlButton.defaultProps = {

}

PomoControlButton.propTypes = {
    text: PropTypes.string.isRequired
}