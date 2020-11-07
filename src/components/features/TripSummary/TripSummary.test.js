import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generate link to proper address', () => {
    const expectedLink = '/trip/abc';
    const component = shallow(<TripSummary id='abc' tags={[]} image='' name='' cost='' days={0} />);
    const generatedLink = component.find('Link').prop('to');
    expect(generatedLink).toEqual(expectedLink);
  });

  it('should pass proper src and alt in <img> tag', () => {
    const expSrc = '../images/image.jpg';
    const expAlt = 'picture';
    const component = shallow(<TripSummary id='abc' tags={[]} image={expSrc} name={expAlt} cost='' days={0} />);
    //console.log(component.debug());
    const genSrc = component.find('img').prop('src');
    const genAlt = component.find('img').prop('alt');
    expect(genSrc).toEqual(expSrc);
    expect(genAlt).toEqual(expAlt);
  });

  it('should render props name, cost and days', () => {
    const expName = 'Name';
    const expCost = '10000';
    const expDays = 14;
    const component = shallow(<TripSummary id='abc' tags={[]} image='' name={expName} cost={expCost} days={expDays} />);
    const genName = component.find('.title').text();
    const genCost = component.find('.details span').last().text();
    const genDays = component.find('.details span').first().text();
    expect(genName).toEqual(expName);
    expect(genCost).toMatch(expCost);
    expect(genDays).toMatch(expDays.toString());
  });

  it('should throw an error without required props', () => {
    expect(() => shallow(<TripSummary tags={[]} />)).toThrow();
  });

  it('should render given tags', () => {
    const tags = ['tag1', 'tag2', 'tag3'];
    const component = shallow(<TripSummary id='abc' tags={tags} image='' name='' cost='' days={0} />);
    for (let tag of tags) {
      const genTag = component.find('.tag').at(tags.indexOf(tag)).text();
      expect(genTag).toEqual(tag);
    }
  });

  it('should not render any div with className .tags without prop tags', () => {
    const componentEmpty = shallow(<TripSummary id='abc' tags={[]} image='' name='' cost='' days={0} />);
    const componentNone = shallow(<TripSummary id='abc' image='' name='' cost='' days={0} />);
    expect(componentEmpty.find('article').childAt(3).hasClass('tags')).toBe(false);
    expect(componentNone.find('article').childAt(3).hasClass('tags')).toBe(false);
  });
});