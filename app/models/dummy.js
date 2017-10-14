import DS from 'ember-data';

export default DS.Model.extend({
    label: DS.attr('string'),
    dataAttr: DS.attr('string'),
    date: DS.attr('date')
});
