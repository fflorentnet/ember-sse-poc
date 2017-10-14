import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    urlForFindAll(modelName, snapshot) {
        return 'http://localhost:8181/existingevents';
    }
});
