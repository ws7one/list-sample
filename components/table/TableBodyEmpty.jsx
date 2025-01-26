import { Trans } from 'react-i18next'

import { PlaceholderIcon } from '@/icons'

import Col from '../layout/Col'

const TableBodyEmpty = ({ i18nKey }) => {
  return (
    <Col className="items-center my-10 gap-2 italic text-darkgray-40">
      <PlaceholderIcon className="w-28 h-24" />
      <Trans i18nKey={i18nKey} />
    </Col>
  )
}

export default TableBodyEmpty
