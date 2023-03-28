import Badge from '@/src/components/badge';
import Button from '@/src/components/button';
import Modal from '@/src/components/modal';
import Link from 'next/link';
import { FC, useState } from 'react';
import { MdOutlineDeleteOutline, MdOutlineMail, MdOutlinePhone } from 'react-icons/md';
import { BsFillEyeFill } from 'react-icons/bs';
import { idToPid } from '@/src/utils/pid';
import { BiTrashAlt } from 'react-icons/bi';
import { useMutation } from '@apollo/client';
import { OrganizerDeleteTeamMemberDocument } from '@/src/generated/generated';
import createToast from '@/src/components/toast';

const ViewTeamModal: FC<{
  teamId: string;
  teamName: string;
  teamMembers:
    | {
        __typename?: 'TeamMember' | undefined;
        user: {
          __typename?: 'User' | undefined;
          id: string;
          name: string;
          phoneNumber?: string | null | undefined;
          email: string;
        };
      }[]
    | undefined;
}> = ({ teamId, teamName, teamMembers }) => {
  const [showModal, setShowModal] = useState(false);

  function handleCloseModal() {
    setShowModal(false);
  }

  const [deleteMember] = useMutation(OrganizerDeleteTeamMemberDocument,{
    refetchQueries: ['TeamsByRound'],
    awaitRefetchQueries: true,
  });

  const removeMember = (id: string) => {
    let promise = deleteMember({
      variables: {
        teamId: teamId as string,
        userId: id as string,
      },
    }).then((res) => {
      if (res.data?.organizerDeleteTeamMember.__typename !== 'MutationOrganizerDeleteTeamMemberSuccess') {
        return Promise.reject('Error could not remove team member');
      }
    });
    createToast(promise, 'Removing Team member...');
  };

  const teamSize = teamMembers?.length;

  return (
    <div>
      <Button onClick={() => setShowModal(true)}>
        <BsFillEyeFill />
      </Button>
      <Modal
        title="Team Details"
        showModal={showModal}
        onClose={handleCloseModal}
        size="medium"
      >
        <div className="flex flex-col p-5">
          <div className="flex flex-col justify-start ">
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold">{teamName}</h2>
              <Badge
                className="w-fit"
                color={teamSize === 0 ? 'danger' : 'success'}
              >
                {teamSize === 0 ? 'No Members' : `${teamSize} Members`}
              </Badge>
            </div>
            <div className="flex flex-col just gap-3 mt-5">
              {teamMembers?.map((member) => (
                <div
                  key={member.user.id}
                  className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg bg-clip-padding rounded-lg md:p-5 p-3 flex flex-col md:flex-row md:items-center items-start justify-between md:gap-5 gap-3 md:h-28"
                >
                  <div className="flex flex-col gap-1">
                    <Badge color={'info'}>{idToPid(member.user.id)}</Badge>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-gray-400 text-sm flex items-center gap-1">
                      Name
                    </span>
                    {member.user.name}
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-gray-400 text-sm flex items-center gap-1">
                      Email
                      <MdOutlineMail />
                    </span>
                    <Link
                      href={`mailto:${member.user.email}`}
                      className="hover:underline"
                    >
                      {member.user.email}
                    </Link>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-gray-400 text-sm flex items-center gap-1">
                      Phone
                      <MdOutlinePhone />
                    </span>
                    <Link
                      href={`tel:${member.user.phoneNumber}`}
                      className="hover:underline"
                    >
                      {member.user.phoneNumber}
                    </Link>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-gray-400 text-sm flex items-center gap-1">
                      Delete
                      <MdOutlineDeleteOutline />
                    </span>
                    <Button
                      intent={'danger'}
                      size={'small'}
                      outline
                      onClick={ () => {removeMember(member.user.id)}}
                    >
                      <BiTrashAlt  className="text-base" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ViewTeamModal;
