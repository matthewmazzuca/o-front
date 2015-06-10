export default function() {
  //default
  this.transition(
    this.use('toLeft')
  );

  //match the down arrow
  this.transition(
    this.fromRoute('property.show'),
    this.toRoute('property.details'),
    this.use('toDown')
  );

  //nav state
  this.transition(
    this.hasClass('nav-visible'),
    this.use('toRight', {duration: 300}),

    //set true so reverse animations work
    this.toModel(true),
    this.reverse('toLeft', {duration: 300})
  );
}