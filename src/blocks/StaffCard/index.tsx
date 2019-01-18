import React from 'react'
import PostCard from '../PostCard'

interface Props {
  member: StaffMember
  onClick?: () => void
}

const StaffCard = ({ member, onClick }: Props) => (
  <PostCard
    title={member.name}
    excerpt={member.title}
    img={member.img}
    onClick={onClick}
  />
)

export default StaffCard
