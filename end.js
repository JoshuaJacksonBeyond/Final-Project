$('#submit').on('click', function() {
    $('#Lemke').append(
        `<div class="collective">
            <div class="userPhoto">
            </div>
            <div class="soup">
                <div class="want">
                    <div class="chicken">
                        <p>${$('#DisplayName').val()}</p>
                    </div>
                    <div class="needed">
                        <div class="turkey">
                            <input type="submit" id="edit" value="Edit">
                        </div>
                        <div class="quail">
                            <input type="submit" id="delete" value="Delete">
                        </div>
                    </div>
                </div>          
                <div class="noodle">
                    <p>${$('#Comment').val()}</p>
                </div>
                <div id="EditTextbar">
                </div>
            </div>
        </div>`
    );
});
$('#Lemke').on('click', '#edit', function() {
    let parent = $(this).parents()[0];
    let secondParent = $(parent).parents()[0];
    let thirdParent = $(secondParent).parents()[0];
    let fourthParent = $(thirdParent).parents()[0];
    let containerChildren = $(fourthParent).children()[2];
    $(containerChildren).append(
        `<div class="changes">
            <div class="textSubmit">
                <input type="text" id="editText" placeholder="New Comment">
            </div>
            <div class="cheese">
                <input type="submit" id="re-edit">
            </div>
        </div>`
    );
});
$('#Lemke').on('click', '#re-edit', function() {
    let xparent = $(this).parents()[4];
    let child = $(xparent).children()[0];
    let sibling = $(child).next();
    let anotherChild = $(sibling).children()[1];
    var bob = $(this).parents();
        let simple = $(this).parents()[0];
        let secondyparent = $(simple).parents()[0];
        let myChild = $(secondyparent).children()[0];
        let secondMyChild = $(myChild).children()[0];
        $(anotherChild).text(
            $(secondMyChild).val()
        );
    console.log($(myChild).val())
});
$('#Lemke').on('click', '#delete', function() {
    let zparent = $(this).parents()[0];
    let secondzparent = $(zparent).parents()[0];
    let thirdzparent = $(secondzparent).parents()[0];
    let fourthzparent = $(thirdzparent).parents()[0];
    let fifthzparent = $(fourthzparent).parents()[0];
    $(fifthzparent).remove( 
    );
});
