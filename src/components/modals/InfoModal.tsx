import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the word in 6 tries. After each guess, the color of the tiles will
        change to show how close your guess was to the word.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="N"
          status="correct"
        />
        <Cell value="A" />
        <Cell value="T" />
        <Cell value="E" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter N is in the word but in the wrong spot. 
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="B"
          status="correct"
        />
        <Cell isRevealing={true} isCompleted={true} value="G" status="absent" />
        <Cell isRevealing={true} isCompleted={true} value="Y" status="absent" />
        <Cell isRevealing={true} isCompleted={true} value="O" status="absent" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter B is in the word and in the correct spot
        The other letters are not in word in any spot
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="B"
          status="correct"
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="I"
          status="correct"
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="N"
          status="correct"
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="I"
          status="correct"
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The word is correct.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        This is a BGYO & BINI version of wordle game! 
        -{' '}
        <a
          href="https://twitter.com/porcallanians"
          className="underline font-bold"
        >
          by mrxmy
        </a>{' '}
      </p>
    </BaseModal>
  )
}
