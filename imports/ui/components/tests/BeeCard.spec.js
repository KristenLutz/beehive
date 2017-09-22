import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import ReactShallowRenderer from 'react-test-renderer/shallow';

import BeeCard from '../BeeCard';

import {
  Card,
  CardImg,
  CardBlock,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

describe('BeeCard', () => {
  let instance;
  let cardImg, cardBlock;
  let cardTitle, cardSubtitle, deleteButton;
  const renderer = new ReactShallowRenderer();

  let bee = { _id: 'asdf1234', name: 'test bee', type: 'test type'};
  let removeBee = jest.fn();

  describe('when bee is a worker', () => {
    beforeEach(() => {
      renderer.render(<BeeCard bee={bee} removeBee={removeBee} />);
      instance = renderer.getRenderOutput();

      [cardImg, cardBlock] = instance.props.children;
      [cardTitle, cardSubtitle, deleteButton] = cardBlock.props.children;
    });

    it('checks rendering of Bee Card', () => {
      expect(instance.type).toBe(Card);
      expect(instance.props.children.length).toBe(2);
    });

    it('checks rendering of CardImg', () => {
      expect(cardImg.type).toBe(CardImg);
      expect(cardImg.props.src).toBe(`./images/bees/${bee.type.toLowerCase()}.jpg`);
      expect(cardImg.props.alt).toBe(`${bee.type} Bee`);
    });

    it('checks rendering of CardBlock', () => {
      expect(cardBlock.type).toBe(CardBlock);
      expect(cardBlock.props.children.length).toBe(3);
    });

    it('checks rendering of CardTitle', () => {
      expect(cardTitle.type).toBe(CardTitle);
      expect(cardTitle.props.children).toBe(bee.name);
    });

    it('checks rendering of CardSubtitle', () => {
      expect(cardSubtitle.type).toBe(CardSubtitle);
      expect(cardSubtitle.props.children).toBe(bee.type);
    });

    it('checks rendering of Button', () => {
      expect(deleteButton.type).toBe(Button);
      expect(deleteButton.props.color).toBe('danger');
      expect(deleteButton.props.children).toBe('Delete');
    });

    it('checks to see if the deleteButton calls removeBee', () => {
      deleteButton.props.onClick();
      expect(removeBee).toHaveBeenCalled();
    });
  });
});
